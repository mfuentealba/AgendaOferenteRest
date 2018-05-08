'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CalendarioSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    tiempoBase: String,
    
    lunes: String[], 
    martes: String[], 
    miercoles: String[], 
    jueves: String[], 
    viernes: String[], 
    sabado: String[], 
    domingo: String[] 

    

})

module.exports = mongoose.model('Calendario', UserSchema);