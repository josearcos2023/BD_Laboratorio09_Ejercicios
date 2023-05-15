var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require('./backend/rutas.js');

//configuration
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/lab09');
// mongoose.set('strictQuery', false);
app.use(express.static(__dirname+'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//routes
rutas.iniciar(__dirname);
rutas.principal(app);

//Server initialized
app.listen(3000);
console.log("Escuchando desde el puerto 3000");