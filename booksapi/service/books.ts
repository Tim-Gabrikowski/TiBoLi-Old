module.exports = {
    getBooks: () => {

        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([
                    {id: 1, name: 'book1'},
                    {id: 2, name: 'book2'},
                ]);
            },3500);
        });

        return promise;
    }
};
