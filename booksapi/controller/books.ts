const booksService = require('../service/books.ts')

module.exports = {
    listAction: (req, res) => {

        const books = booksService.getBooks();
        books.then((books)=>{
        let result = '';
            books.forEach((book) => {
                result += `name: ${book.name} <br>`;
            });
            res.send(result);
        });
    }
};
