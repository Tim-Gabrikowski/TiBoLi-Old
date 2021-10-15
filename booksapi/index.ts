import express from 'express';
import booksController from './controller/BooksController';
import editionsController from './controller/EditionsController';

let booksApiRouter = express.Router();
// books
booksApiRouter.get('/',booksController.listAction);
booksApiRouter.get('/:id', booksController.getByIdAction);
booksApiRouter.put('/:id', booksController.putByIdAction);
booksApiRouter.post('/', booksController.postAction);
booksApiRouter.delete('/:id', booksController.deleteAction);
// editions
booksApiRouter.post('/:bookId/editions', editionsController.postAction);
booksApiRouter.put('/:bookId/editions/:id', editionsController.putByIdAction);
booksApiRouter.delete('/:bookId/editions/:id', editionsController.deleteAction);

export default booksApiRouter
