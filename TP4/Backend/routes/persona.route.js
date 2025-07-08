const express = require('express');
const { getPersonas } = require('../controllers/persona.controller.js');

const router = express.Router();

router.get('/', getPersonas);

module.exports = router;