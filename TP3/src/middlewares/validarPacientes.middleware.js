const joi = require('joi');

const pacienteSchema = joi.object({
  dni: joi.string().length(8).pattern(/^\d+$/).required().messages({
    'string.length': 'El DNI debe tener 8 dígitos',
    'string.pattern.base': 'El DNI debe ser numérico',
    'any.required': 'El DNI es obligatorio'
  }),
  nombre: joi.string().required().messages({
    'any.required': 'El nombre es obligatorio',
    'string.base': 'El nombre debe ser texto'
  }),
  apellido: joi.string().required().messages({
    'any.required': 'El apellido es obligatorio',
    'string.base': 'El apellido debe ser texto'
  }),
  email: joi.string().email().required().messages({
    'string.email': 'El email debe tener un formato válido',
    'any.required': 'El email es obligatorio'
  }),
  password: joi.string().min(8).required().messages({
    'string.min': 'La contraseña debe tener al menos 8 caracteres',
    'any.required': 'La contraseña es obligatoria'
  })
});

const validarPaciente = (req, res, next) => {
    const { error } = pacienteSchema.validate(req.body, { abortEarly: true });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

module.exports = validarPaciente