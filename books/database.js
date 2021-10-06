var mysql = require('mysql8.0');
  

var con = mysql.createConnection({
  host: "localhost",    
  user: "user",   
  password: "user",    
  database: "booksdb" 
});
var data = [{id: 0, title: '', author: ''}];

con.connect(function(err) {
    if (err) throw err;
    
});

query = (sql) => {
    return new Promise((resolve, reject)=>{
        con.query(sql,  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};

async function GetAllQuery () {
    try{
        const result = await query('SELECT * FROM books');
        data = result;
    } catch(error) {
        console.log(error)
    }
}


module.exports = {
    getAll(){
        GetAllQuery();
        setTimeout(function afterTimeout(){
        console.log(data)
        return data;
        }, 1000);
    }
};
