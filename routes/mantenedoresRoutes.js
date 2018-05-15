'use strict'

var express = require('express');
var MantenedoresController = require('../controller/mantenedoresController');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');


api.post('/tipo-contrato/create/', md_auth.ensureAuth, MantenedoresController.saveTipoContrato);
api.post('/categoria/create/', md_auth.ensureAuth, MantenedoresController.saveCategoria);
api.post('/subcategoria/create/', md_auth.ensureAuth, MantenedoresController.saveSubcategoria);
module.exports = api;