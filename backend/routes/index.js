var express = require('express');
var models = require('models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Trying to return all pets
router.get('/pets', function(req, res, next) {
  res.json(models.Pet.find());
})

module.exports = router;
