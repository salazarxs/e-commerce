import bd from '@/app/helpers/bd/bd';
import { DataTypes } from 'sequelize';

const UserModel = db.define('USERS', {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    userImage: {
        type: DataTypes.STRING
    },
    userProducts: {
        type: DataTypes.STRING
    },
},
    {
        tableName: 'USERS',
    });
export default UserModel;