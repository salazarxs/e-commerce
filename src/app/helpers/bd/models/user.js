import db from '@/app/helpers/bd/bd';
import { DataTypes, Sequelize } from 'sequelize';

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
    },/* 
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
    }, */
},
    {
        tableName: 'USERS',
        timestamps: false
    });
export default UserModel;