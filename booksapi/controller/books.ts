const booksService = require('../service/books.ts')

module.exports = {
    listAction: (req, res) => {

        let result = '';
        const books = booksService.getBooks();

        books.forEach((book) => {
            result += `name: ${book.name} <br>`;
        });
        res.send(result);
    }
};
