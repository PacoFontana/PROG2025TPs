const personas = require ("../models/persona.model.js");

const getPersonas = (req, res) => {
    res.status(200).json({
        message: "Personas obtenidas correctamente",
        data: personas
    });
}

module.exports = {getPersonas};