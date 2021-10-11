module.exports = render();

function render(isbn, data = '') {
    var isbnString = `ISBN:${isbn}`
    console.log(data);
    // parsetData = JSON.parse(data);
    return `
        <!DOCTYPE html>
        <html lang="de">
            <head>
                <meta charset="UTF-8">
                <title>ISBN finder</title>
            </head>
            <body>
                <div class="infoContainer">
                    <!DOCTYPE html>
        <html lang="de">
            <head>
                <meta charset="UTF-8">
                <title>ISBN finder</title>
            </head>
            <body>
                <div class="infoContainer">
                    <div class="field">
                        <h1>ISBN:</h1>
                        <p></p>
                    </div>
                    <div class="field">
                        <h1>Autor:</h1>
                        <p></p>
                    </div>
                </div>
            </body>
        </html>`
}