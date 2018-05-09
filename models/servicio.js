'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServicioSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    contrato:  {type: Schema.ObjectId, ref: 'Contrato'},
    

})

module.exports = mongoose.model('Servicio', UserSchema);