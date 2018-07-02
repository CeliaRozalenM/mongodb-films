var Director= require('./movies');
var Movie= require('./movies');

function createMovie(){

    listNames = ["Antonio", "Laura", "Luisa", "Carlos"];
    listSurnames = ["Rodríguez", "Fernández", "López"];
    listMovieTitle_1 = ["La casa", "El niño", "La playa", "Un árbol"];
    listMovieTitle_2 = ["azul", "feliz", "de la montaña", "en medio"];

    function getRandomArbitrary(max,min=0) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function getDirectorName(){
        return  listNames[getRandomArbitrary(listNames.length, 0)] + " " + listSurnames[getRandomArbitrary(listSurnames.length, 0)];
    }
 
    function getMovieTitle(){
        return  listMovieTitle_1[getRandomArbitrary(listMovieTitle_1.length, 0)] + " " + listMovieTitle_2[getRandomArbitrary(listMovieTitle_2.length, 0)];
    }
    
    function getRandomYear(){
        return  getRandomArbitrary(1900, 2000);
    }

    //Create an object with the data that we want to save. Same name of require variable!

    var director = new Director();
    var movie = new Movie();

    //Call the variable, not the object
    director.name = getDirectorName();
    director.birth= getRandomYear();

    director.save(function(err){
        if(err){
            console.log("There is an "+ err.message)
        }else{
            console.log("Director inserted correctly")
        }
    })

    movie.name = getMovieTitle();
    movie.year= getRandomYear();

    movie.save(function(err){
        if(err){
            console.log("There is an "+ err.message)
        }else{
            console.log("Movie inserted correctly")
        }
    })    
}

module.exports = {
    createMovie
}