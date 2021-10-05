module.exports = function render(books) {
    return `
    <!DOCTYPE html>
    <html lang="de">
        <head>
            <meta charset="UTF-8">
            <title>Books</title>
            <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
            <table>
                <thead>
                    <tr><th>ID</th><th>Title</th><th>Author</th></tr>
                </thead>
                <tbody>
                    ${books
                        .map(book => `<tr><td>${book.id}</td><td>${book.title}</td><td>${book.author}</td></tr>`)
                        .join('')}
                </tbody>
            </table>
        </body>
    </html>`;
}