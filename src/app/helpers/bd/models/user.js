import bd from '@/app/helpers/bd/bd';
import { DataTypes } from 'sequelize';

const UserModel = db.define('USERS', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
    }
},
    {
        tableName: 'USERS',
        timestamps: false
    });
export default UserModel;