const { stringify } = require("querystring");
const { parseJsonText } = require("typescript");
const requestISBN = require("./requestDataByISBN");

var data = "";

function searchISBNAction(request, response, bookIsbn) {
  requestISBN.requestData(bookIsbn).then(() => {
    data = requestISBN.getData();
    body = render(data[createISBNString(bookIsbn)]);
    response.send(body);
  });
}
module.exports = {
  searchISBNAction,
};

function createISBNString(isbn) {
  return "ISBN:" + isbn;
}

function render(data = {}) {
  data = JSON.stringify(data);
  data = JSON.parse(data);

  try {
    var response = `
        <!DOCTYPE html>
        <html lang="de">
            <head>
                <meta charset="UTF-8">
                <title>ISBN finder</title>
            </head>
            <body>
                <div class="infoContainer">
                    <div class="field">
                        <h1>ISBN 10:</h1>
                        <p>${data.identifiers.isbn_10[0]}</p>
                    </div>
                    <div class="field">
                        <h1>Title:</h1>
                        <p>${data.title}</p>
                    </div>
                    <div class="field">
                        <h1>author:</h1>
                        <p>${data.authors[0].name}</p>
                    </div>
                </div>
            </body>
        </html>`;
  } catch (err) {
    response += err;
  }
  return response;
}
