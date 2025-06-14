const { obtenerPersonas } = require('../models/persona.models');

function getPersonas(req, res) {
  const personas = obtenerPersonas();
  res.json(personas);
}

module.exports = { getPersonas }