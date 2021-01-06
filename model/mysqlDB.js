const mysql = require('mysql');

function __connection() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'aa987654321',
        database: 'explore',
        port: '3306'
    });
    connection.connect();
    return connection;
}
exports.query = function (sql, parmas = null) {
    const connection = __connection();
    return new Promise((reject, resolve) => {
        connection.query(sql, parmas, function (error, results, fields) {
            if (error) throw error;
            reject(results);
        });
        connection.end();
    })
}