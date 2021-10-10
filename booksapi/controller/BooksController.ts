import BooksService, { Book } from '../service/BooksService';

export default class BooksController {

    static async listAction(req, res) {
        const booksService = new BooksService();
        const books: Book[] = await booksService.getBooks();
        res.json(books);
    }
}
