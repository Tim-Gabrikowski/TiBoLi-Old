const express = require('express');
const router = express.Router();
const { listAction, listDeletedAction, deleteAction, recoverAction, formAction, saveAction } = require('./controller');


router.get('/', listAction);
router.get('/deleted', listDeletedAction);
router.get('/delete/:id', deleteAction);
router.get('/recover/:id', recoverAction);
router.get('/form/:id?', formAction);
router.post('/save', saveAction);

module.exports = router;