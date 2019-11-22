const mongoose = require('mongoose');

MONGODB_URI= "mongodb+srv://bootie:backendpractice@cluster0-0vejq.mongodb.net/animal-adoption?retryWrites=true&w=majority";

mongoose.connect("MONGODB_URI",{ useNewUrlParser: true }, (conn, err) => {
	console.log("You have connected to the database")
});

const petSchema = new mongoose.Schema({
    name = String,
    breed = String,
    status = String,
    gender = String,
    yearsOld = Number,
    dopted = Boolean
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;