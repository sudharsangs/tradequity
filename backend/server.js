
const PORT = process.env.PORT || 4000;
const express = require('express');
const mysql = require('mysql');
const SHA1 = require('sha1');
const cors = require('cors');
const bodyparser = require('body-parser');





//var validator=require('email-validator');

//validator.validate("nishithmunda9212gmailcom");


/*const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended: false});*/

const app= express();
const router = express.Router();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host:'localhost',
  port:'3306',
	user: 'boss',
	password:'1234',
	database: 'tradequity'

});

connection.connect(function(err) {
  if (err)
	console.log("Connection error");
	else
	console.log("Connected to DB!");

});

console.log(connection);


router.route('http://localhost:4000/signup').post(function(req,res) {
  let sql="INSERT INTO `userdetail_TB`(`email`,`password`, `name`, `gender`, `phone`) VALUES ('"+req.body.email+"','"+req.body.password+"','"+req.body.name+"','"+req.body.gender+"','"+req.body.phno+"')"
    console.log(req.body.name);
    connection.query(sql,function(err,res){
    if(err) throw err;
    else {
        return res.send("Successfully added");
    }
  });
});                                                                                     

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

module.exports = app;
app.listen(4000,()=>{console.log('Listening on port 4000')
});
