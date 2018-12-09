const express = require('express')
const app = express()
const port = 3000
var db = require('./db.js');

app.get('/getstatus', function(req, res){
	let serial = req.query.serial;
	try {
		db.pool.query('SELECT * from devices WHERE serial like "' +serial + '"' , function (error, results, fields) {
		  if (error) {
		  	console.log(error);
		  	res.send(400, {message: "Error occured"})
		  }
		  else{
		  	res.send(results[0])
		  }
		  
		});
		// statements
	} catch(e) {
		res.send(400, {message: "Error occured"})
		// statements
		console.log(e);
	}

});

app.get('/setstatus', function(req, res){
	let serial = req.query.serial;
	let status = req.query.status;

	try {
		db.pool.query('UPDATE devices SET status = ' +status + ' WHERE serial like "' +serial + '"' , function (error, results, fields) {
		  if (error) {
		  	console.log(error);
		  	res.send(400, {message: "Error occured"})
		  }
		  else{
		  	res.send(results)
		  }
		  
		});
		// statements
	} catch(e) {
		// statements
		res.send(400, {message: "Error occured"})
		console.log(e);
	}

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))