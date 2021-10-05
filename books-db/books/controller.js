const model = require('./model');
const view = require('./view');
const form = require('./form');


function listAction(request, response) {
    const books = model.getAll();
    const body = view(books);
    response.send(body);
}
function deleteAction(request, response) {
    const id = parseInt(request.params.id, 10);
    model.delete(id);
    response.redirect(request.baseUrl);
}
function formAction(request, response) {
    let book = { id: '', title: '', author: '' };
    if(request.params.id) {
        movie = model.getAll(parseInt(request.params.id, 10));
    }
    const body = form(book);
    response.send(body);
}
function saveAction(request, response) {
    const book = {
        id: request.body.id,
        title: request.body.title,
        author: request.body.author,
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