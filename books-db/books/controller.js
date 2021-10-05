const model = require('./model');
const view = require('./view');


function listAction(request, response) {
    const books = model.getAll();
    const body = view(books);
    response.send(body);
}

module.exports = {
    listAction,
};