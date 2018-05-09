'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoContratoSchema = Schema({
    nombre: String,
    duracion: String, 
    publicidad: int
    

})

module.exports = mongoose.model('TipoContrato', UserSchema);