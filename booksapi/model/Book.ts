import { INTEGER, Model, STRING } from 'sequelize';
import IBook from './IBook';
import sequelize from '../../service/SequelizeService';

export default class Book extends Model implements IBook {
    id!: number;
    name!: string;
};
Book.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING
    }
}, {sequelize, modelName: 'books', timestamps: false});
