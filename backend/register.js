var express = require('express');
var SHA1 = require('sha1');
var connection = require('./config.js');
var mysql = require('mysql');
var app= express();

var share_connect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'1234',
	database: 'sharedetails'
});

share_connect.connect(function(err) {
	if (err)
	  console.log("Connection error in Share Details");
	  else
	  console.log("Connected in Share Details!");
  
  });



module.exports.register=function(req,res){

	      var data={
          "email":req.body.email,
          "password":SHA1(req.body.password),
          "name":req.body.name,
					"gender":req.body.gender,
          "phone":req.body.phone
        }
        
        module.exports.email = data.email;

    connection.query('INSERT INTO userdetail_tB SET ?',data,function(err,result){
      var uid = result.insertId;
    if(err) return res.send(err);
    else
      { 
        
        var create = `CREATE TABLE user${uid}(sno TINYINT PRIMARY KEY AUTO_INCREMENT, company VARCHAR(50), symbol VARCHAR(25),count INT(100) ,cost INT(100), currency VARCHAR(20),date DATE,market varchar(25))`;
      
       share_connect.query(create,function(error){
          if(error){
          console.log(error);
          console.log("Share TB Creation Failed !!");}
          else
          {
          console.log("Share TB Connected");
          }
          });
          return res.send('200');
      }


  });
}



/*app.listen(4000,()=>{console.log('Listening on port 4000')
});*/
