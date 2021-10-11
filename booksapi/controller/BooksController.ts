import BooksService, { Book } from '../service/BooksService';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

export default class BooksController {

    constructor(private booksService: BooksService) {
    }

    async listAction(req: Request, res: Response) {
        const books: Book[] = await this.booksService.getBooks();
        res.json(books);
    }

    async getByIdAction(req: Request, res: Response, next: NextFunction) {
        const id = Number(req.params.id);
        const book: null | Book = await this.booksService.getBook(id);

        if (book) {
            res.json(book);
        } else {
            next(createError(404));
        }
    }
}
