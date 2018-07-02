var mongoose = require('mongoose');

//Creas el esquema
var Schema = mongoose.Schema;
var moviesSchema = new Schema({
    name: {type: String, required: true, unique: true },
    year:Number
})

//Creas el modelo y exportas con él el Schema. Te pide un nombre y el esquema.
var Movies = mongoose.model('Movies', moviesSchema);

//Exportas el módulo
module.exports = Movies;