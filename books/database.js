var mysql = require('mysql8.0');

var con = mysql.createConnection({
  host: "localhost",    
  user: "user",   
  password: "user",    
  database: "booksdb" 
});



var data = [{id: 0, title: '', author: '', deleted: 0}];

con.connect(function(err) {
    if (err) throw err;
    
});

query = (sql) => {
    return new Promise((resolve, reject)=>{
        con.query(sql, (error, results)=>{
            if(error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
async function deleteItem(id) {
    try {
        data = await query(`UPDATE books SET deleted = '1' WHERE id = ${id}`);
    } catch(error) {
        console.log(error)
    }
}
async function createItem(title, author) {
    try {
        console.log('DB.createItem');
        data = await query(`INSERT INTO books (title, author) VALUES ('${title}', '${author}')`);
    } catch(error) {
        console.log(error)
    }
}
async function updateItem(book) {
    try {
        data = await query(`UPDATE books SET title = '${book.title}', author = '${book.author}' WHERE id = ${book.id}`);
    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    async getAll() {
        try {
            data = await query('SELECT * FROM books');
        } catch(error) {
            console.log(error)
        }
    },
    getData() {
        return data;
    },
    deleteData(id){
        deleteItem(id);
    },
    createData(book){
        console.log('DB.createData!');
        console.log(book);
        console.log(book.title);
        console.log(book.author);
        createItem(book.title, book.author);
    },
    updateData(book){
        updateItem(book);
    }
};
