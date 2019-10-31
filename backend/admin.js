var express = require('express');
var SHA1 = require('sha1');
var connection = require('./config.js');
var app= express();


module.exports.admin=function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  var encrypted = SHA1(password);
  connection.query('SELECT * FROM admin_tB WHERE mail = ?',[email], function (error, results, fields) {
  if (error) {
     console.log("error ocurred",error);
  }
  else{
     
      

          if(results.length >0)
          {
            if(results.length >0)
            {
  
  
               if(results[0].password == encrypted)
                 {
                  return res.send("200");
                 }
                else
                 {
                  return res.send("300");
                 }
           }
    else
      {
      return res.send("400");
      }
    }
         }
  
  
  });
}
/*app.listen(4000,()=>{console.log('Listening on port 4000')
});*/
