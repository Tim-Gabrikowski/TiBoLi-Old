import mysql from 'promise-mysql';

export default class MySqlService {
    private static connection;

    public async getConnection() {
        if (!MySqlService.connection) {
            MySqlService.connection = await this.createConnection();
        }

        return MySqlService.connection;
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
