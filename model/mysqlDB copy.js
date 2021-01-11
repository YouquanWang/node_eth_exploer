const mysql = require('mysql');
function __pool() {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'aa987654321',
        database: 'explore',
        port: '3306',
        multipleStatements: true,
        connectionLimit: 100000
    });
    return pool;
}
exports.query = function (sql, parmas = null) {
    let pool = __pool();
    return new Promise((reject, resolve) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(err);
                return
              }
            connection.query(sql, parmas, (error, results, fields) => {
                connection.release()
                if (error) {
                  resolve(error);
                  return
                }
                reject(results);
            });
        })
    })
}