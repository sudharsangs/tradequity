

//var validator=require('email-validator');

//validator.validate("nishithmunda9212gmailcom");

var express = require('express');
var mysql = require('mysql');
var SHA1 = require('sha1');

var app= express();
var connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password:'',
	database: 'signup_db'

});

connection.connect(function(err) {
  if (err)
	console.log("Connection error");
	else
	console.log("Connected!");

});

app.get('/list/add',(req,res) => {
//var { mail , password , DOB ,name, gender, phone} = req.query;
  var sql=`INSERT INTO userdetail_TB ( mail , password , DOB ,name, gender, phone) VALUES('${mail}','${SHA1(password)}','${DOB}','${name}','${gender}','${phone}')`;
    connection.query(sql,(err,result)=>{
    if(err) throw err;
    else {
      {
        return res.send("Successfully added");
      }
    }
  });
})

/*app.get('/list',(req,res) =>{
connection.query("SELECT * FROM signup_tb",(err,result) =>{
 if(err)
    {
      res.send(err);
    }
  else
    {
         res.json({
         data:result

       })
    }

})
}); */

app.listen(4000,()=>{console.log('Listening on port 4000')
});
