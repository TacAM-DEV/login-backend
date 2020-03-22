module.exports = {
    signin: function (ctx) {
        const mysql = require('mysql'),
              connection = mysql.connection({
                  host: process.env.DBHOST,
                  user: process.env.DBUSER,
                  password: process.env.DBPASSWORD,
                  database: process.env.DBTABLE
              });
        connection.connect();
        
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });
        
    },
    signup: function (ctx) {

    }
};