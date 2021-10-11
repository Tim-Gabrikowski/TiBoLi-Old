import MySqlService from './MySqlService';

let mysql = require('promise-mysql');

export interface Book {
    id: number,
    name: string
}

export default class BooksService {

    constructor(private mySqlService: MySqlService) {
    }

    getBooks(): Promise<Book[]> {
        return this.findAll();
    }

    getBook(id: number): Promise<Book> {
        return this.findById(id);
    }

    private async findAll(): Promise<Book[]> {

        const connection = await this.mySqlService.getConnection();
        return connection.query(`SELECT *
                                 from books;`);
    }

    private async findById(id: number): Promise<Book> {
        const connection = await this.mySqlService.getConnection();
        const books = await connection.query(`SELECT *
                                 from books
                                 where id = ${id};`);
        return books[0] === undefined ? null : books[0];
    }
}
