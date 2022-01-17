const express = require('express')
const router = express.Router()
const tareasController = require('../controllers/tareasController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

// Crear una tarea
// api/tareas
router.post('/', auth, [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ], tareasController.crearTarea
)

// Obtener las tareas por proyecto
router.get('/', auth, tareasController.obtenerTareas)

// Actualizr tareas
router.put('/:id', auth, tareasController.actualizarTarea)

// Eliminar tarea
router.delete('/:id', auth, tareasController.eliminarTarea)

module.exports = router;