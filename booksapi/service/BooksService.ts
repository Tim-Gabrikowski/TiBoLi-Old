import MySqlService from './MySqlService';

export interface Book {
    id: number,
    name: string
}

export default class BooksService {

    constructor(private mySqlService: MySqlService) {
    }

    async getAll(): Promise<Book[]> {
        const connection = await this.mySqlService.getConnection();
        return connection.query(`SELECT *
                                 from books;`);
    }

    async getById(id: number): Promise<Book> {
        const connection = await this.mySqlService.getConnection();
        const books = await connection.query(`SELECT *
                                 from books
                                 where id = ${id};`);
        return books[0] === undefined ? null : books[0];
    }

    async update(id: number, book: Book): Promise<boolean> {
        const connection = await this.mySqlService.getConnection();
        const updateResult = await connection.query(
            `UPDATE books set name='${book.name}'
                                 where id = ${id};`);

        if (updateResult.affectedRows !== undefined && updateResult.affectedRows === 1) {
            return true;
        }
        return false;
    }
}
