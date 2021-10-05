const { request, response } = require('express');
const express = require('express');
const booksRouter = require('./books')
const morgan = require('morgan');

const app = express();

app.get('/', (req, res) => res.redirect('/books')); //Redirect from localhost:8080 to localhost:8080/books

app.use(express.static(__dirname + '/public'));

app.use(morgan('common', { immediate: true }));

app.use('/books', booksRouter);

app.listen(8080, () => {
    console.log('Server on port 8080');
});