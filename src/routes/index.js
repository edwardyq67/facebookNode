const express = require('express');
const routerInformacionImg = require('./informacionImg.routes');
const router = express.Router();

// colocar las rutas aquí

router.use('/informacion',routerInformacionImg)
module.exports = router;