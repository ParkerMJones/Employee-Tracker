const mysql = require('mysql2');

require('dotenv').config();

const db =  mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PW,
    database: 'employees_db'
});

module.exports = db;