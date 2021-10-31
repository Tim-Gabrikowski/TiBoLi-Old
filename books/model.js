const { STRING } = require("mysql8.0/lib/protocol/constants/types");
const database = require("./database");
const date = require("./date");
let data = [{ id: 0, title: "", author: "", deleted: 0, deletedDate: "" }];

getDataFromDatabase();

function getDataFromDatabase() {
  database.getAll().then(() => {
    data = database.getData();
  });
}

/* [
    { id: 1, title: 'How To', author: 'Randal Munroe'},
    { id: 2, title: 'What if', author: 'Randal Munroe'},
    { id: 3, title: 'Der Marsianer', author: 'Andy Weir'},
    { id: 4, title: 'Der Astronaut', author: 'Andy Weir'},
    { id: 5, title: 'Artemis', author: 'Andy Weir'},
    { id: 6, title: 'Die Känguru Chroniken', author: 'Mark-Uwe Kling'},
    { id: 7, title: 'Das Känguru Manifest', author: 'Mark-Uwe Kling'},
    { id: 8, title: 'Die Känguru Offenbarungen', author: 'Mark-Uwe Kling'},
    { id: 9, title: 'Die Känguru Apokryphen', author: 'Mark-Uwe Kling'},
]; */

function getNextId() {
  return data[data.length - 1].id + 1;
}
function insert(book) {
  book.id = getNextId();
  book.deleted = 0;
  data.push(book);
  console.log("model.insert!");
  database.createData(book);
}
function update(book) {
  book.id = parseInt(book.id, 10);
  const index = data.findIndex((item) => item.id === book.id);
  data[index] = book;
  console.log("model.update!");
  database.updateData(book);
}

module.exports = {
  getAll() {
    getDataFromDatabase();
    return data;
  },
  get(id) {
    return data.find((book) => book.id === id);
  },
  delete(id) {
    const index = data.findIndex((item) => item.id === id);
    data[index].deleted = 1;
    data[index].deletedDate = String(date.getDate());
    console.log(data[index]);
    database.deleteData(id);
  },
  save(book) {
    console.log("model.Save!");
    book.id === "0" ? insert(book) : update(book);
  },
  recover(id) {
    const index = data.findIndex((item) => item.id === id);
    data[index].deleted = 0;
    data[index].deletedDate = "";
    database.recoverData(id);
  },
  search(searchTerm = "") {
    console.log("Suchausdruck:" + searchTerm);
    var result = [];
    for (var i = 0; i < data.length; i++) {
      var title = data[i].title.toLowerCase();
      var author = data[i].author.toLowerCase();
      console.log(title);
      console.log(author);
      searchTerm = searchTerm.toLowerCase();

      if (title.includes(searchTerm)) {
        result[result.length] = data[i];
      } else if (author.includes(searchTerm)) {
        result[result.length] = data[i];
      }
    }
    return result;
  },
};
