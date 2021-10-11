const requestISBN = require('./requestDataByISBN');
var data = '';

function searchISBNAction(request, response) {
    var bookIsbn = 3453271678;
    requestISBN.requestData(bookIsbn).then(() => {
        data = requestISBN.getData();
        console.log(data);
        body = render(bookIsbn, data);
        response.send(body);
    })
}

module.exports = {
    searchISBNAction,
};

function render(isbn, data) {
    var isbnString = `ISBN:${isbn}`
    // parsetData = JSON.parse(data);
    return data;
}