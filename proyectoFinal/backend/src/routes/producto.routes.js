const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

router.post('/productos', productoController.crearProducto);
router.get('/productos', productoController.obtenerProductos);
router.get('/productos/:id', productoController.obtenerProductoPorId);
router.put('/productos/:id', productoController.actualizarProducto);
router.delete('/productos/:id', productoController.eliminarProducto);

module.exports = router;