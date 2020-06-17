const movieModel = require('../models/movie-model');

const ControllerMovie = ()=>{
};

ControllerMovie.error404 = (req, res, next)=>{
    let error = new Error();
    error.status = 404;
    let locals = {
        title: "ERROR 404",
        description: "RECURSO NO ENCONTRADO",
        error: error
    }
    res.render("error", locals);
};

ControllerMovie.getAll = (req, res, next)=>{
    movieModel.getAll((docs)=>{  //toda esta función la lanzo coo parametro a la función getAll del modelo.
        let locals = {
            title: "Lista de Peliculas",
            data: docs
        }
        res.render('index', locals);
    });

};

ControllerMovie.add = (req, res, next)=>{

};

ControllerMovie.saveAdd = (req, res, next)=>{

};

ControllerMovie.update = (req, res, next)=>{

};

ControllerMovie.saveUpdate = (req, res, next)=>{

};

ControllerMovie.delete = (req, res, next)=>{

};

module.exports = ControllerMovie;