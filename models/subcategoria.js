'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubCategoriaSchema = Schema({
    nombre: String,
    descripcion: String,
    categoria: {type: Schema.ObjectId, ref: 'Categoria'}

    

})

module.exports = mongoose.model('SubCategoria', UserSchema);