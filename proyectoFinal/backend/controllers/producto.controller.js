const Producto = require('../models/producto.model');

crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json({
            mensaje: 'Producto creado exitosamente',
            producto: nuevoProducto
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al crear el producto',
            error: error.message
        });
    }
};

obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        if (productos.length === 0) {
            return res.status(404).json({
                mensaje: 'No se encontraron productos'
            });
        }
        res.status(200).json({
            mensaje: 'Productos obtenidos exitosamente',
            productos: productos
    });
    }
    catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener los productos',
            error: error.message
        });
    }
};

obtenerProductoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }
        res.status(200).json({
            mensaje: 'Producto obtenido exitosamente',
            producto: producto
        });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener el producto',
            error: error.message
        });
    }
}

actualizarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const [actualizado] = await Producto.update(req.body, {
            where: { id: id }
        });
        if (actualizado) {
            const productoActualizado = await Producto.findByPk(id);
            res.status(200).json({
                mensaje: 'Producto actualizado exitosamente',
                producto: productoActualizado
            });
        } else {
            res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al actualizar el producto',
            error: error.message
        });
    }
}

eliminarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        const eliminado = await Producto.destroy({
            where: { id: id }
        });
        if (eliminado) {
            res.status(200).json({
                mensaje: 'Producto eliminado exitosamente',
                producto: producto
            });
        }
        else {
            res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al eliminar el producto',
            error: error.message
        });
    }
}

aumentarStock = async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {return res.status(404).json({mensaje: 'Producto no encontrado'});
    }

    producto.stock += 1;
    await producto.save();  
    res.status(200).json(producto);
}

disminuirStock = async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {return res.status(404).json({mensaje: 'Producto no encontrado'});
    }

    if (producto.stock > 0) {
        producto.stock -= 1;
        await producto.save();
        res.status(200).json(producto);
    } else {
        res.status(400).json({mensaje: 'El stock no puede ser menor a 0'});
    }
}

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
    aumentarStock,
    disminuirStock
};