import express from 'express';
import booksController from './controller/BooksController';

let booksApiRouter = express.Router();

booksApiRouter.get('/',booksController.listAction);
booksApiRouter.get('/:id', booksController.getByIdAction);
booksApiRouter.put('/:id', booksController.putByIdAction);
booksApiRouter.post('/', booksController.postAction);
booksApiRouter.delete('/:id', booksController.deleteAction);

export default booksApiRouter
