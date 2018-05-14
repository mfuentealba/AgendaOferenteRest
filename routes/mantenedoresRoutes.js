'use strict'

var express = require('express');
var UserController = require('../controller/user');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/users'})

api.post('/tipo-contrato/create/', md_auth.ensureAuth, UserController.uploadImage);
api.post('/clasificacion/create/', md_auth.ensureAuth, UserController.uploadImage);
api.post('/subclasificacion/create/', md_auth.ensureAuth, UserController.uploadImage);
module.exports = api;