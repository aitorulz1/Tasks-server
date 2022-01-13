const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { check } = require('express-validator')

// Crear usuario
router.post('/', 
    [
        check('email', 'El mail debe de ser válido').isEmail(),
        check('password', 'El nombre es obligatorio').isLength({min: 3}),
    ] , authController.autenticarUsuario);

module.exports = router;