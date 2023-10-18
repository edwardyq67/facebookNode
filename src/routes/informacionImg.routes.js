const { getAll, create, getOne, remove, update } = require('../controllers/informacion.controllers');
const express = require('express');

const routerInformacionImg = express.Router();

routerInformacionImg.route('/')
    .get(getAll)
    .post(create);

routerInformacionImg.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerInformacionImg;