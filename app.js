'use strict'

var express = require('express');
var bodyParser = require ('body-parser');

var app =express();

// cargar rutas
var user_routes =require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras

//ruta base
app.use('/api', user_routes);

//rutas body-parser
/*
app.get('/pruebas', function(req,res){
	res.status(200).send({message:"esta es la primera ruta"});

});*/
module.exports = app;