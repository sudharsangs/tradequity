var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password:'1234',
	database: 'tradequity'

});




connection.connect(function(err) {
  if (err)
	console.log("Connection error");
	else
	console.log("Connected!");

});

module.exports = connection;
