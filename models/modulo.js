'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModuloSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    cliente: {type: Schema.ObjectId, ref: 'User'},

    fechaIni: String,
    fechaFin: String, 

    

})

module.exports = mongoose.model('Modulo', UserSchema);