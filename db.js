var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'cmpe297iotparking.cnw0rghbzkbb.us-west-1.rds.amazonaws.com',
  user            : 'iotparking',
  password        : 'iotparking',
  database        : 'iotparking'
});

module.exports = { pool };