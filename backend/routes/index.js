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

module.exports = router;
