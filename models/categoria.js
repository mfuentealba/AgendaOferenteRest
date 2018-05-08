'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = Schema({
    nombre: String,
    descripcion: String 

    

})

module.exports = mongoose.model('Categoria', UserSchema);