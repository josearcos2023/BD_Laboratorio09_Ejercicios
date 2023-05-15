var mongoose = require("mongoose");
var EsquemaArea = mongoose.Schema({
    nombre: String,
    abreviatura: String,
    Estado: String
});
module.exports = mongoose.model("Areas",EsquemaArea,"Areas")