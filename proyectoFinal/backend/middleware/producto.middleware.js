const joi = require('joi');

const productoSchema = joi.object({
    nombre: joi.string().min(3).max(50).required().messages({
        'string.base': 'El nombre debe ser un texto',
        'string.min': 'El nombre debe tener al menos 3 caracteres',
        'string.max': 'El nombre no puede exceder los 50 caracteres',
        'any.required': 'El nombre es un campo obligatorio'
    }),
    categoria: joi.string().min(3).max(50).required().messages({
        'string.base': 'La categoría debe ser un texto',
        'string.min': 'La categoría debe tener al menos 3 caracteres',
        'string.max': 'La categoría no puede exceder los 50 caracteres',
        'any.required': 'La categoría es un campo obligatorio'
        }),
    descripcion: joi.string().allow('').required().max(500).messages({
        'string.base': 'La descripción debe ser un texto',
        'string.max': 'La descripción no puede exceder los 500 caracteres',
        'any.required': 'La descripción es un campo obligatorio'
        }),
    precio: joi.number().positive().required().messages({
        'number.base': 'El precio debe ser un número',
        'number.positive': 'El precio debe ser un número positivo',
        'any.required': 'El precio es un campo obligatorio'
        }),
    stock: joi.number().integer().min(0).required().messages({
        'number.base': 'El stock debe ser un número entero',
        'number.min': 'El stock no puede ser negativo',
        'any.required': 'El stock es un campo obligatorio'
    })
});

const productoSchemaPut = joi.object({
    nombre: joi.string().min(3).max(50).messages({
        'string.base': 'El nombre debe ser un texto',
        'string.min': 'El nombre debe tener al menos 3 caracteres',
        'string.max': 'El nombre no puede exceder los 50 caracteres'
    }),
    categoria: joi.string().min(3).max(50).messages({
        'string.base': 'La categoría debe ser un texto',
        'string.min': 'La categoría debe tener al menos 3 caracteres',
        'string.max': 'La categoría no puede exceder los 50 caracteres'
        }),
    descripcion: joi.string().allow('').max(500).messages({
        'string.base': 'La descripción debe ser un texto',
        'string.max': 'La descripción no puede exceder los 500 caracteres'
        }),
    precio: joi.number().positive().messages({
        'number.base': 'El precio debe ser un número',
        'number.positive': 'El precio debe ser un número positivo'
        }),
    stock: joi.number().integer().min(0).messages({
        'number.base': 'El stock debe ser un número entero',
        'number.min': 'El stock no puede ser negativo'
    })
});

function validarProducto(req, res, next) {
    const { error } = productoSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

function validarProductoPut(req, res, next) {
    const { error } = productoSchemaPut.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

module.exports = { validarProducto, validarProductoPut};