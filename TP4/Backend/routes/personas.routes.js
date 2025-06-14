const express = require('express');
const router = express.Router();
const { getPersonas } = require('../controllers/persona.contoller');

router.get('/personas', getPersonas);

module.exports = router;