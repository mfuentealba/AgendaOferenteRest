'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContratoSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    tipoContrato:  {type: Schema.ObjectId, ref: 'TipoContrato'},
    fechaInicio: String,
    fechaFin: String,
    comision: String
    

})

module.exports = mongoose.model('Contrato', UserSchema);