const express = require('express');

const { listAction } = require('./controller/books.ts');

let booksApiRouter = express.Router();

booksApiRouter.get('/', listAction);

module.exports = booksApiRouter;
