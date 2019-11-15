var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password:''
	//database: 'sample'

});

connection.connect(function(err) {
  if (err)
	console.log("Connection error");
	else
	console.log("Connected!");
  connection.query("CREATE DATABASE tradequity", function (err, result) {
  if (err)
	console.log("Creation Fail");
	else
  console.log("Database created");
  
});
});

connection.connect(function(err) {
	if (err)
	  console.log("Connection error");
	  else
	  console.log("Connected!");
	connection.query("CREATE DATABASE sharedetails", function (err, result) {
	if (err)
	  console.log("Share Database Creation Fail");
	  else
	console.log("Share Database created");
	
  });
  });
