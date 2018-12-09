const express = require('express')
const app = express()
const port = 3000
var db = require('./db.js');

app.get('/getstatus', function(req, res){
	let serial = req.query.serial;
	db.pool.query('SELECT * from devices WHERE serial like "' +serial + '"' , function (error, results, fields) {
	  if (error) throw error;
	  res.send(results[0])
	});
});

app.get('/setstatus', function(req, res){
	let serial = req.query.serial;
	let status = req.query.status;

	db.pool.query('UPDATE devices SET status = ' +status + ' WHERE serial like "' +serial + '"' , function (error, results, fields) {
	  if (error) throw error;
	  res.send(results)
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))