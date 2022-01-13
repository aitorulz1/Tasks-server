const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async(req, res) => {
 
    // Revisar si hay errores
    const errores = validationResult(req); // req -> request para retornar si hay algún error y lo genera como un array
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    try {
        // Crear nuevo proyecto
        const proyecto = new Proyecto(req.body);

        // Guardar el creador
        proyecto.creador = req.usuario.id

        //Guardarlo
        proyecto.save();
        res.json(proyecto)

    } catch (error) {
        console.log(error);
        res.status(500).json('Hubo un error creando el proyecto')
    }
}
