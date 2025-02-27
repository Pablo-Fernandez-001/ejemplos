const mysql = require('mysql');

// importar las llaves
const keys = require('../config/keys');

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    }).catch(err => {
        console.error('DB connection error: ',err);
    });

module.exports = pool;
