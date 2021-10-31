module.exports = render;

function render(data = {}) {
  return `
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
                        <p>${data.identifiers}</p>
                    </div>
                    <div class="field">
                        <h1>Autor:</h1>
                        <p>${data.authors}</p>
                    </div>
                </div>
            </body>
        </html>`;
}
