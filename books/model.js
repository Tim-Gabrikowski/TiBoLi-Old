const database = require('./database');
let data = [{id: 0, title: '', author: '', deleted: 0}];

getDataFromDatabase();

function getDataFromDatabase(){
    database.getAll().then(() => {
        data = database.getData();
    });
}

/* [
    { id: 1, title: 'How To', author: 'Randal Munroe'},
    { id: 2, title: 'What if', author: 'Randal Munroe'},
    { id: 3, title: 'Der Marsianer', author: 'Andy Weir'},
    { id: 4, title: 'Der Astronaut', author: 'Andy Weir'},
    { id: 5, title: 'Artemis', author: 'Andy Weir'},
    { id: 6, title: 'Die Känguru Chroniken', author: 'Mark-Uwe Kling'},
    { id: 7, title: 'Das Känguru Manifest', author: 'Mark-Uwe Kling'},
    { id: 8, title: 'Die Känguru Offenbarungen', author: 'Mark-Uwe Kling'},
    { id: 9, title: 'Die Känguru Apokryphen', author: 'Mark-Uwe Kling'},
]; */

function getNextId() {
    return data[data.length - 1].id + 1;
}
function insert(book) {
    book.id = getNextId();
    book.deleted = 0;
    data.push(book);
    console.log('model.insert!');
    database.createData(book);
}
function update(book) {
    book.id = parseInt(book.id, 10);
    const index = data.findIndex(item => item.id === book.id);
    data[index] = book;
    console.log('model.update!');
    database.updateData(book);
}

module.exports = {
    getAll() {
        getDataFromDatabase();
        return data;
    },
    get(id) {
        return data.find(book => book.id === id);
    },
    delete(id) {
        data = data.filter(book => book.id !== id);
        database.deleteData(id);
    },
    save(book) {
        console.log('model.Save!');
        book.id === '0' ? insert(book) : update(book);
    },
};