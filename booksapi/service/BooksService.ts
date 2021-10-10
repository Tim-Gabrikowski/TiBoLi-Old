let mysql = require('promise-mysql');

export interface Book {
    id: number,
    name: string
}

export default class BooksService {
    getBooks(): Promise<Book[]> {
        return this.selectFromBooks();
    }

    private async selectFromBooks(): Promise<any> {
        const connectionOptions = {
            host: 'db',
            user: 'root',
            password: 's3cret',
            database: 'tiboli',
        };
        const connection = await mysql.createConnection(connectionOptions);
        return connection.query('SELECT * from books;')
    }
}
