import BooksService, { Book } from '../service/BooksService';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

export default class BooksController {

    constructor(private booksService: BooksService) {
    }

    async listAction(req: Request, res: Response) {
        const books: Book[] = await this.booksService.getAll();
        res.json(books);
    }

    async getByIdAction(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const book: null | Book = await this.booksService.getById(id);

        if (book) {
            res.json(book);
        } else {
            next(createError(404));
        }
    }

    async putByIdAction(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const book = req.body;
        const result = await this.booksService.update(id, book) ;
        if (result === true) {
            res.sendStatus(204);

        } else {
            next(createError(404));
        }
    }
}
