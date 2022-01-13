const express = require('express')
const router = express.Router()
const proyectosController = require('../controllers/proyectosController')
const auth = require('../middleware/auth')


// Crear usuario
router.post('/', auth, proyectosController.crearProyecto);

module.exports = router;