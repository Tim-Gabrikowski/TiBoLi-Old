 export default class BooksService {
    constructor() {
        console.log('constructor');
    }
    getBooks() {

        return new Promise<any[]>((resolve, reject) => {

            setTimeout(() => {
                resolve([
                    {id: 1, name: 'book1'},
                    {id: 2, name: 'book2'},
                ]);
            }, 10);
        });
    }
}
