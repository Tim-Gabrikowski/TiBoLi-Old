import mysql from 'promise-mysql';

export default class MySqlService {
    private connection;

    public async getConnection() {
        if (!this.connection) {
            this.connection = await this.createConnection();
        }

        return this.connection;
    }

    private async createConnection(){
        const connectionOptions = {
            host: 'db',
            user: 'root',
            password: 's3cret',
            database: 'tiboli',
        };
        return mysql.createConnection(connectionOptions);
    }



}
