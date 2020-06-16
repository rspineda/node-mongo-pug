const movieModel = require('../models/movie-model');

const ControllerMovie = ()=>{
};

ControllerMovie.error404 = (req, res, next)=>{

};

ControllerMovie.getAll = (req, res, next)=>{
    movieModel.getAll((docs)=>{
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