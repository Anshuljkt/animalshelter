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

module.exports = Pet;