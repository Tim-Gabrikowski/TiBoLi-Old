const express = require('express');
const router = express.Router();
const { listAction } = require('./controller');




router.get('/', listAction);

module.exports = router;