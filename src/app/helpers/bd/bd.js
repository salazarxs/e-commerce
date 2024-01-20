import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'

const db = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    dialectModule: mysql2,
});


export default db;