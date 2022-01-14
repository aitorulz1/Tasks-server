const express = require('express')
const router = express.Router()
const proyectosController = require('../controllers/proyectosController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

// Crear proyecto
router.post('/', auth, [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
], proyectosController.crearProyecto);

// Obtener proyecto
router.get('/', auth, proyectosController.obtenerProyectos);

// Actualizar proyecto vía ID
router.put('/:id', auth, [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
], proyectosController.actualizarProyecto);



// ELiminar un proyecto
router.delete('/:id', auth, [
    check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
], proyectosController.eliminarProyecto);


module.exports = router;


