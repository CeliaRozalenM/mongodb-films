var mongoose = require('mongoose');

//Schemas
var Schema = mongoose.Schema;
var moviesSchema = new Schema({
    name: {type: String, required: true, unique: true },
    year: Number
});

var directorsSchema = new Schema({
    name: {type: String, required: true, unique: true },
    birth: Number
});

//Create model to export schema. The parameters are "Model Name - (Collection name)" and "Schema Name"
var Movies = mongoose.model('Movies', moviesSchema);
var Directors = mongoose.model('Directors', directorsSchema);

//Export model
module.exports = Movies;
module.exports = Directors;