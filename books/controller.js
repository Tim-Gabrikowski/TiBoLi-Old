const model = require('./model');
const { render } = require('./view');
const form = require('./form');


function listAction(request, response) {
    const books = model.getAll();
    const body = render(books, 1);
    response.send(body);
}
function deleteAction(request, response) {
    const id = parseInt(request.params.id, 10);
    model.delete(id);
    response.redirect(request.baseUrl);
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
        author: request.body.author
    };
    model.save(book);
    response.redirect(request.baseUrl);
}


module.exports = {
    listAction,
    deleteAction,
    formAction,
    saveAction,
};