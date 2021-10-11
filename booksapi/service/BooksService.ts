import IBook from '../model/IBook';
import Book from '../model/Book';

class BooksService {

    getAll(): Promise<IBook[]> {
        return Book.findAll();
    }

    getById(id: number): Promise<IBook> {
        return Book.findByPk(id);
    }

    async update(id: number, book: IBook): Promise<IBook> {
        book.id = undefined;
        let currentBook = await Book.findByPk(id);
        return await currentBook.update(book);
    }

    create(data): Promise<IBook> {
        data.id = undefined;
        return Book.create(data);
    }

    async delete(id: number) {
        let currentBook = await Book.findByPk(id);
        return currentBook.destroy();
    }
}

const booksService = new BooksService();
export default booksService;
