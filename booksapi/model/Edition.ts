import { STRING, INTEGER, Model } from 'sequelize';
import IEdition from './IEdition';
import sequelize from '../../service/SequelizeService';

export default class Edition extends Model implements IEdition {
    id: number;
    edition: number;
    isbn: number;
    comment: string;
}

Edition.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    edition: {
        type: INTEGER,
    },
    isbn: {
        type: INTEGER,
        allowNull: true,
    },
    comment: {
        type: STRING,
        allowNull: true,
    },

}, {sequelize, modelName: 'edition', tableName: 'edition', timestamps: false});
