let mysql = require('promise-mysql');

export default class BooksService {
    constructor() {
        console.log('constructor');
    }

    getBooks() {
        return this.selectFromBooks();
    }

    private async selectFromBooks() {
        const connectionOptions = {
            host: 'db',
            user: 'root',
            password: 's3cret',
            database: 'tiboli',
        };
        let connection = await mysql.createConnection(connectionOptions);
        let books = await connection.query('SELECT * from books;')

        return books;
    }
}
