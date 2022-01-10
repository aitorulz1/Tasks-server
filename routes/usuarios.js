const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

// Crear usuario
router.post('/', usuarioController.crearUsuario);

module.exports = router;