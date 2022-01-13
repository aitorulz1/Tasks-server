const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {

    // Revisar si hay errores
    const errores = validationResult(req); // req -> request para retornar si hay algún error y lo genera como un array
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    // Extraer email y password
    const { email, password } = req.body; 

    try {
        //Revisar si el usuario está regitrado o no 
        let usuario = await Usuario.findOne({email})

        if(!usuario) {
            return res.status(400).json({msg:'El usuario no existe'})
        }

        //Revisar el password
        const passCorrecto = await bcryptjs.compare(password, usuario.password)

        if(!passCorrecto) {            
            return res.status(400).json({msg:'Password Incorrecto'})
        }

        // Si todo es correcto
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        // Firmar el jwt
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn:3600 // 1 hora
        }, (error, token) => {
            if(error) throw error;

             // Mensaje de confirmación
             res.json({ token });
        });

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error con la autenticación')
    }
}