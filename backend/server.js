
const PORT = process.env.PORT || 4000;
const express = require('express');
const mysql = require('mysql');
const SHA1 = require('sha1');
const cors = require('cors');






//var validator=require('email-validator');

//validator.validate("nishithmunda9212gmailcom");


/*const bodyparser = require('body-parser');
const urlencodedparser = bodyparser.urlencoded({extended: false});*/

const app= express();
app.use(cors());
const connection = mysql.createConnection({
	host:'localhost',
	user: 'boss',
	password:'1234',
	database: 'tradequity'

});

connection.connect(function(err) {
  if (err)
	console.log("Connection error");
	else
	console.log("Connected!");

});

app.post('/signup',(req,res) => {
//var { mail , password , DOB ,name, gender, phone} = req.query;
  var sql=`INSERT INTO userdetail_TB ( email , password ,name, gender, phone) VALUES('${email}','${SHA1(password)}', '${name}','${gender}','${phone}')`;
    connection.query(sql,(err,result)=>{
    if(err) throw err;
    else {
        return res.send("Successfully added");
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

require('./routes/html-routes')(app);
app.listen(4000,()=>{console.log('Listening on port 4000')
});
