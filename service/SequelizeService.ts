import { Sequelize } from 'sequelize';

const connectionOptions = {
    host: 'db',
    user: 'root',
    password: 's3cret',
    database: 'tiboli',
};

const sequelize = new Sequelize(
    connectionOptions.database,
    connectionOptions.user,
    connectionOptions.password,
    {
        host: connectionOptions.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });

export default sequelize;
