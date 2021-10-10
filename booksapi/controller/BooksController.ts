import BooksService from '../service/BooksService';

export default class BooksController {

    static listAction (req, res) {
        console.log(BooksService);
        const booksService = new BooksService();
        const books = booksService.getBooks();
        books.then((books)=>{
        let result = '';
            books.forEach((book) => {
                result += `name: ${book.name} <br>`;
            });
            res.send(result);
        });
    }
}
