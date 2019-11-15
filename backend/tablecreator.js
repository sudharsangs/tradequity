var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password:'1234',
  database: 'tradequity'

});
connection.connect(function(error){
  if(error)
    console.log("Database Connection Failed !!");
  else
   {
    console.log("Database Connection Successful !!");
    var sql = "CREATE TABLE userdetail_tB (uid TINYINT PRIMARY KEY AUTO_INCREMENT,email VARCHAR(50), password VARCHAR(100),name VARCHAR(25) , gender VARCHAR(4), phone VARCHAR(20))";
		var sql2 = "CREATE TABLE marketdetail_tB ( symbol VARCHAR(25),company VARCHAR(25),currentprice DECIMAL(13, 4) )";
		var sql3 = "CREATE TABLE admin_tB ( mail VARCHAR(25),password VARCHAR(100),name VARCHAR(25))";

		connection.query(sql,function(error){
        if(error)
        console.log("TB Creation Failed !!");
        else
        {
        console.log("TB Connected");
        }
				});
		connection.query(sql2,function(error){
        if(error)
        console.log("TB Creation Failed !!");
        else
        {
        console.log("TB Connected");
        }
       });
		connection.query(sql3,function(error){
 	        if(error)
 	        console.log("TB Creation Failed !!");
 	        else
 	        {
 	        console.log("TB Connected");
 	        }
 	       });
		
   }
});
