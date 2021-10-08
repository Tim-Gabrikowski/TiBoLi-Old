var template = [{id: 0, title: '', author: '', deleted: 0}];

let table = '';

module.exports = { 
    render(books, deleted) {
        template = books;
        table = '';
        for(let i = 0; i < template.length; i++) {
            if(books[i].deleted === deleted){
                let row =
                    '<tr>' +
                        '<td>' + template[i].id + '</td>' +
                        '<td>' + template[i].title + '</td>' +
                        '<td>' + template[i].author + '</td>' +
                        '<td><a href="/books/delete/' + template[i].id + '"><button class="deleteButton">löschen</button></a></td>' +
                        '<td><a href="/books/form/' + template[i].id + '"><button class="editButton">bearbeiten</button></a></td>' + 
                    '</tr>';
                table += row;
            }  
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
                        <tr><th>ID in database</th><th>Title</th><th>Author</th><th></th><th></th></tr>
                    </thead>
                    <tbody>
                        ${table}
                    </tbody>
                </table>
                <div class="siteBox">
                    <div class="optionsBox">
                        <h1>Bücher</h1>
                        <a href="/books/form"><button class="newButton">neu</button></a>
                    </div>
                    <div class="infobox">
                        <h2>&copy Tim Gabrikowski</h2>
                        <p>Alle Rechte vorbehalten.</p>
                    </div>
                </div>
                
                
            </body>
        </html>`;
    },
}
