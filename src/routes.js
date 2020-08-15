const express = require('express');
const routes = express.Router()
const Cads = require('./controllers/controllerCads')

routes.get('/cad',Cads.index);
routes.get('/cad/:id',Cads.find);
routes.post('/cad',Cads.store);
routes.delete('/cad/:id',Cads.Delete);

module.exports = routes