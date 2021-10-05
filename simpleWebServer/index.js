const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('My first script using Express');
    console.log(request.path);
});


app.listen(8080, () => {
    console.log('Server on port 8080');
});