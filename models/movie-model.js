const movieModel = require('./movie-schema');


const Movie = ()=>{
};

Movie.getAll = (cb)=>{  //le llega como argumento el callback que le paso desde el controlador

    movieModel.find({}).exec((err, docs)=>{
        if(err) throw err;
        cb(docs); //aqui ejecuta el callback , y renderiza todo lo que manda el controlador
    });
};

Movie.save = (doc,cb)=>{
    movieModel.create(doc, (err)=>{
        if(err) throw err;
        cb(doc);
    });
};


Movie.update = ()=>{

};

Movie.saveUpdate = ()=>{

};

Movie.delete = ()=>{

};


module.exports = Movie;