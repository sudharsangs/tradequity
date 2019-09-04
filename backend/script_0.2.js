var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password:'',
  database: 'signup_db'

});
connection.connect(function(error){
  if(error)
    console.log("Database Connection Failed !!");
  else
   {
    console.log("Database Connection Successful !!");
    var sql = "CREATE TABLE userdetail_TB ( mail VARCHAR(50) PRIMARY KEY, password VARCHAR(25), DOB date ,name VARCHAR(25) , gender VARCHAR(4), phone VARCHAR(20))";
    var sql2 = "CREATE TABLE sharedetail_TB ( mail VARCHAR(25) references userdetail_TB, sharesymbol VARCHAR(25), sharecount INTEGER(100))";
		var sql3 = "CREATE TABLE marketdetail_TB ( symbol VARCHAR(25),company VARCHAR(25),currentprice DECIMAL(13, 4) )";
		var sql4 = "CREATE TABLE admin_TB ( mail VARCHAR(25),password VARCHAR(25),name VARCHAR(25))";

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
		connection.query(sql4,function(error){
							if(error)
							console.log("TB Creation Failed !!");
							else
							{
							console.log("TB Connected");
							}
						 });
   }
});
