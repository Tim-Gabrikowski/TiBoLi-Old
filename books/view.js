var template = [{id: 0, title: '', author: ''}];

let table = '';

module.exports = { 
    render(books) {
        template = books;
        for(let i = 0; i < template.length; i++) {
            let row =
                '<tr>'
                    '<td>' + template[i].id + '</td>' +
                    '<td>' + template[i].title + '</td>' +
                    '<td>' + template[i].author + '</td>' +
                    '<td><a href="/books/delete/' + template[i].id + '">Löschen</a></td>' +
                    '<td><a href="/books/form/' + template[i].id + '">Bearbeiten</a></td>' + 
                '</tr>';

            console.log(row);
            table += row;
        }

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
                        ${table}
                    </tbody>
                </table>
                <a href="/books/form">neu</a>
            </body>
        </html>`;
    },
}
