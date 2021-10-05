const express = require('express');
const router = express.Router();
const { listAction, deleteAction, formAction, saveAction } = require('./controller');




router.get('/', listAction);
router.get('/delete/:id', deleteAction);
router.get('/form/:id?', formAction);
router.post('/save', saveAction);

module.exports = router;