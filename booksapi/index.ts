import express from 'express';
import BooksController  from './controller/BooksController';

let booksApiRouter = express.Router();
booksApiRouter.get('/', BooksController.listAction);

export default booksApiRouter
