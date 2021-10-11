import BooksService from '../service/BooksService';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import IBook from '../model/IBook';
import booksService from '../service/BooksService';

class BooksController {

    async listAction(req: Request, res: Response) {
        const books: IBook[] = await booksService.getAll();
        res.json(books);
    }

    async getByIdAction(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const book: null | IBook = await booksService.getById(id);

        if (book) {
            res.json(book);
        } else {
            next(createError(404));
        }
    }

    async putByIdAction(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const book = req.body;
        const result = await booksService.update(id, book);
        if (result) {
            res.status(200);
            res.json(book);

        } else {
            next(createError(404));
        }
    }

    async postAction(req: Request, res: Response, next: NextFunction) {
        const bookData = req.body;
        const book = await booksService.create(bookData);
        res.status(201).json(book);
    }

    async deleteAction(req: Request, res: Response, next: NextFunction) {

        try {
            const id = Number(req.params.id);
            const result = await booksService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            next(createError(404));
        }
    }
}

const booksController = new BooksController();
export default booksController;
