const axios = require("axios");

var bookData;

requestData = async isbn => {
    url = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&format=json&jscmd=data';
    try {
        const response = await axios.get(url);
        const data = response.data;
        bookData = data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    requestData,
    getData(){
        return bookData;
    }
}

