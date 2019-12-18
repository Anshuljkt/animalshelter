var express = require('express');
var router = express.Router();
// const {Pet}  = require('../models');

const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    id: Number,
    animalType: String,
    name: String,
    breed: String,
    status: String,
    gender: String,
    yearsOld: Number,
    adopted: Boolean
});

const Pet = mongoose.model('Pet', petSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Trying to return all pets
router.get('/pets', function(req, res, next) {
  console.log("returning all pets");
  console.log(Pet);
  Pet.find()
  .then(pets => {
    console.log(pets);
    res.locals.data = pets
    res.locals.status = 200
    return next()
  })
  .catch(err => {
    console.error(err)
    res.locals.error = {error: err.message}
    return next()
  })
  console.log("done");
})

module.exports = router;
