const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');
const validarProducto = require('../middleware/producto.middleware').validarProducto;
const validarProductoPut = require('../middleware/producto.middleware').validarProductoPut;

router.post('/productos', validarProducto, productoController.crearProducto);
router.get('/productos', productoController.obtenerProductos);
router.get('/productos/:id', productoController.obtenerProductoPorId);
router.put('/productos/:id', validarProductoPut, productoController.actualizarProducto);
router.delete('/productos/:id', productoController.eliminarProducto);
router.patch('/productos/:id/aumentar', productoController.aumentarStock);
router.patch('/productos/:id/disminuir', productoController.disminuirStock);

module.exports = router;