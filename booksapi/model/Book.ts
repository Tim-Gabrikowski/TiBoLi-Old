import { INTEGER, Model, STRING } from 'sequelize';
import IBook from './IBook';
import sequelize from '../../service/SequelizeService';
import Edition from './Edition';

export default class Book extends Model implements IBook {
    id!: number;
    title!: string;
    author!: string;
};
Book.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: STRING
    },
    author: {
        type: STRING
    }
}, {sequelize, modelName: 'book', timestamps: false});

Book.hasMany(Edition, {foreignKey: 'book_id'});
Edition.belongsTo(Book, {foreignKey: 'book_id'});
