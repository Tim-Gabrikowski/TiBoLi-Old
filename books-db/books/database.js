
// Node.js MySQL Result Object Example
// include mysql module
var mysql = require('mysql8.0');
  
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "user",    // user name to your mysql database
  password: "user",    // corresponding password
  database: "booksdb" // use the specified database
});
var data = [{id: 0, title: '', author: ''}];

  
// make to connection to the database.
con.connect(function(err) {
    if (err) throw err;
    getAll();
});

function getAll() {
    con.query("SELECT * FROM books", function (err, result, fields) {
        if (err) throw err;
        setValue(result);        
    });
}

function setValue(value) {
    data = value;
    console.log('data was set');
    console.log(data[0]);
}