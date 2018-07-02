var Movie = require('./movies');

function createMovie(){
    /**
     *  Crear película
     */
    //Creamos un objeto movie con los datos que queremos guardar
    var movie = new Movie();
    //LLama a la variable no a la clase, por eso movie y no Movie
    movie.name = "Titanic";
    movie.year= 1996;

    movie.save(function(err){
        if(err){
            console.log("Hay un error "+ err.message)
        }else{
            console.log("Película insertada correctamente")
        }
    })
}

module.exports = {
    createMovie
}