module.exports = function render(book, action) {
  return `
        <!DOCTYPE html>
        <html lang="de">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="/stylesheets/booksForm.css" />
                <title>Bücherliste</title>
            </head>
            <body>
                <div class="formBox">
                    <h1>${action} Book</h1>
                    <form action="/books/save" method="POST">
                        <input type="hidden" id="id" name="id" value="${book.id}">
                        <div class="inputBoxes">
                            <div class="title">
                                <label for="title">Titel:</label>
                                <br>
                                <input type="text" id="title" name="title" value="${book.title}">
                                
                            </div>
                            <br>
                            <div class="author">
                                <label for="author">Autor:</label>
                                <br>
                                <input type="text" id="author" name="author" value="${book.author}">
                            </div>
                        </div>
                        <div class="buttons">
                            <button type="submit" class="submitButton">Speichern</button>
                        </div>
                    </form>
                </div>
            </body>
        </html>`;
};
