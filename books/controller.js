const model = require('./model');
const { render } = require('./view');
const form = require('./form');
const { url } = require('inspector');

function listDeletedAction(request, response){
    const books = model.getAll();
    const body = render(books, 1);
    response.send(body);
}
function listAction(request, response) {
    const books = model.getAll();
    const body = render(books, 0);
    response.send(body);
}
function deleteAction(request, response) {
    const id = parseInt(request.params.id, 10);
    model.delete(id);
    response.redirect(request.baseUrl);
}
function recoverAction(request, response) {
    const id = parseInt(request.params.id, 10);
    model.recover(id);
    var url = request.baseUrl + '/deleted';
    response.redirect(url);
}
function formAction(request, response) {
    var action = 'New';
    var book = { 
        id: 0,
        title: '', 
        author: '' 
    };
    if(request.params.id) {
        book = model.get(parseInt(request.params.id, 10));
        action = 'Edit';
    }
    const body = form(book, action);
    response.send(body);
}
function saveAction(request, response) {
    console.log('saveAction!');
    const book = {
        id: request.body.id,
        title: request.body.title,
        author: request.body.author,
        deleted: 0,
        deleteDate: new Date()
    };
    model.save(book);
    response.redirect(request.baseUrl);
}
function searchAction(request, response) {

    var searchTerm = '';
    searchTerm = request.query.searchTerm;
    books = model.search(searchTerm);
    body = render(books, 0, searchTerm);
    response.send(body);
}
function searchDeletedAction(request, response) {

    var searchTerm = '';
    searchTerm = request.query.searchTerm;
    books = model.search(searchTerm);
    body = render(books, 1, searchTerm);
    response.send(body);
}


module.exports = {
    listAction,
    listDeletedAction,
    deleteAction,
    recoverAction,
    formAction,
    saveAction,
    searchAction,
    searchDeletedAction,
};