module.exports = function render(books) {
    return `
    <!DOCTYPE html>
    <html lang="de">
        <head>
            <meta charset="UTF-8">
            <title>Books</title>
            <link rel="stylesheet" href="/stylesheets/books.css" />
        </head>
        <body>
            <table>
                <thead>
                    <tr><th>ID</th><th>Title</th><th>Author</th><th></th><th></th></tr>
                </thead>
                <tbody>
                    ${books
                        .map(book => `
                        <tr>
                            <td>${book.id}</td>
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td><a href="/books/delete/${book.id}">löschen</a></td>
                            <td><a href="/books/form/${book.id}">bearbeiten</a></td>
                        </tr>`)
                        .join('')}
                </tbody>
            </table>
            <a href="/books/form">neu</a>
        </body>
    </html>`;
}
