const data = [
    { id: 1, title: 'How To', author: 'Randal Munroe'},
    { id: 2, title: 'What if', author: 'Randal Munroe'},
    { id: 3, title: 'Der Marsianer', author: 'Andy Weir'},
    { id: 4, title: 'Der Astronaut', author: 'Andy Weir'},
    { id: 5, title: 'Artemis', author: 'Andy Weir'},
    { id: 6, title: 'Die Känguru Chroniken', author: 'Mark-Uwe Kling'},
    { id: 7, title: 'Das Känguru Manifest', author: 'Mark-Uwe Kling'},
    { id: 8, title: 'Die Känguru Offenbarungen', author: 'Mark-Uwe Kling'},
    { id: 9, title: 'Die Känguru Apokryphen', author: 'Mark-Uwe Kling'},
];

module.exports = {
    getAll() {
        return data;
    },
};