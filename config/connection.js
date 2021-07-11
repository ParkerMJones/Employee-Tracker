const mysql = require('mysql2');

require('dotenv').config();

const db = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PW,
    database: 'employees_db'
};

const connection = mysql.createConnection(connectionProperties);

module.exports = { db, connection };