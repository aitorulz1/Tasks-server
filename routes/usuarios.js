const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const { check } = require('express-validator')

// Crear usuario
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El mail debe de ser válido').isEmail(),
        check('password', 'El nombre es obligatorio').isLength({min: 3}),
    ] ,usuarioController.crearUsuario);

module.exports = router;