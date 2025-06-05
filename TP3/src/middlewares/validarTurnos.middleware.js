const joi = require('joi');

const turnoSchema = joi.object({
  idPaciente: joi.string().pattern(/^\d+$/).required().messages({
    'any.required': 'El ID del paciente es obligatorio',
    'string.base': 'El ID del paciente debe ser un texto'
  }),
  fecha: joi.date().iso().required().messages({
    'date.base': 'La fecha debe ser una fecha válida',
    'date.format': 'La fecha debe estar en formato ISO (YYYY-MM-DD)',
    'any.required': 'La fecha es obligatoria'
  }),
  hora: joi.string().pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).required().messages({
    'string.pattern.base': 'La hora debe estar en formato HH:mm',
    'any.required': 'La hora es obligatoria'
  })
});
const validarTurno = (req, res, next) => {
  const { error } = turnoSchema.validate(req.body, { abortEarly: true });

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}
module.exports = validarTurno;