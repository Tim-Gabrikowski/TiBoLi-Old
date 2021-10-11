var template = [{id: 0, title: '', author: '', deleted: 0, deleteDate: new Date()}];

let table = '';

let deletedButton = '<a href="/books/deleted"><button class="deletedButton">gelöschte Bücher</button></a>';
let activeButton = '<a href="/books/"><button class="activeButton">aktive Bücher</button></a>'

let deletedHeadline = 'Gelöschte Bücher';
let activeHeadline = 'Aktive Bücher';

module.exports = { 
    render(books, deleted , searchTerm = '') {

        let button = '';
        let headline = '';
        let searchLink = '';
        if(deleted === 1) {
            button = activeButton;
            headline = deletedHeadline;
            searchLink = '/books/deleted/search/';
        } else {
            button = deletedButton;
            headline = activeHeadline;
            searchLink = '/books/search/';
        }

        template = books;
        table = '';
        for(let i = 0; i < template.length; i++) {
            if(books[i].deleted === deleted) {
                if(books[i].deleted === 0){
                    let row =
                        '<tr>' +
                            '<td>' + template[i].id + '</td>' +
                            '<td>' + template[i].title + '</td>' +
                            '<td>' + template[i].author + '</td>' +
                            '<td><a href="/books/delete/' + template[i].id + '"><button class="deleteButton">löschen</button></a></td>' +
                            '<td><a href="/books/form/' + template[i].id + '"><button class="editButton">bearbeiten</button></a></td>' + 
                        '</tr>';
                    table += row;
                }  else {
                    let row =
                        '<tr>' +
                            '<td>' + template[i].id + '</td>' +
                            '<td>' + template[i].title + '</td>' +
                            '<td>' + template[i].author + '</td>' +
                            '<td><a href="/books/recover/' + template[i].id + '"><button class="recoverButton">wiederherstellen</button></a></td>' +
                            '<td><a href="/books/form/' + template[i].id + '"><button class="editButton">bearbeiten</button></a></td>' + 
                        '</tr>';
                    table += row;
                }
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
                <h1 class="headLine">${headline}</h1>
                <div class="searchBox">
                            <form action="${searchLink}" method="get">
                                <div class="searchInput">
                                    <label for="search">Suche:</label>
                                    <input type="text" id="searchTerm" name="searchTerm" value="${searchTerm}">
                                    <button class="searchSubmit" type="submit">Suchen</button>
                                </div>
                                
                            </form>
                        </div>
                <table>
                    <thead>
                        <tr><th>ID</th><th>Title</th><th>Author</th><th></th><th></th></tr>
                    </thead>
                    <tbody>
                        ${table}
                    </tbody>
                </table>
                <div class="siteBox">
                    <div class="optionsBox">
                        <h1>Bücher</h1>
                        <a href="/books/form"><button class="newButton">neues Buch</button></a>
                        ${button}
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
