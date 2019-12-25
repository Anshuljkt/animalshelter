var express = require('express');
var router = express.Router();
const {Pet}  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Trying to return all pets
router.get('/allPets', function(req, res, next) {
  console.log("returning all pets");
  Pet.find()
  .then(pets => {
    console.log(pets);
    res.locals.status = 200
    res.send(pets)
  })
  .catch(err => {
    console.error(err)
    res.sendStatus(400);
  })
  console.log("done");
})

router.get('/groupPets', function(req, res, next) {
  //Sample API call: GET "localhost:3001/groupPets"
  console.log("Renaming species to animalType")
  Pet.collection.updateMany(
    {},
    {
      $rename: {
        species: 'animalType'
      }
    }
  )
  console.log("Returning grouped pets")
  Pet.aggregate([
    {
      $group: {
        _id: "$animalType",
        pets: {$push: "$$ROOT"}
      }
    }
  ])
  .then(pets => {
    res.send(pets);
  })
})

router.post('/adopt', function(req, res, next) {
  //Sample API call: POST "localhost:3001/adopt?id=123456"
  const id = req.query.id;
  console.log(`Trying to adopt pet with ID: ${id}`);
  Pet.findByIdAndUpdate(id, 
    {$set: {adopted: true}},
    function(err, resp) {
      if(err && err.name === "CastError") {
        const message = "Invalid ID! Please try again."
        console.error(message);
        res.status(400).send(message);
      }
      else if(err) {
        console.error(err.message);
        res.status(400).send(err.message);
      }
      else if(resp === undefined || resp === null) {
        const message = "A pet with this ID was not found in the database. Please try again.";
        console.log(message);
        res.status(404).send(message);
      }
      else if(resp.adopted) {
        const message = `${resp.name} is already adopted! Cannot adopt.`
        console.log(message);
        res.status(400).send(message);
      } else {
        console.log(`Successfully adopted ${resp.name}!`);
        res.status(200).send(`Successfully adopted ${resp.name}!`);
      }
    })
})

module.exports = router;
