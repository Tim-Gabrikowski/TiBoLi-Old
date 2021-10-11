import express, { Send } from 'express';
import BooksController from './controller/BooksController';
import BooksService from './service/BooksService';
import MySqlService from './service/MySqlService';

let booksApiRouter = express.Router();
let mySqlService  = new MySqlService();
let booksService: BooksService = new BooksService(mySqlService);
let booksController: BooksController = new BooksController(booksService);

booksApiRouter.get('/',
    (req, res) => {
        booksController.listAction(req, res);
    });
booksApiRouter.get('/:id',
    (req, res, next) => {
        booksController.getByIdAction(req, res, next);
    });

export default booksApiRouter
