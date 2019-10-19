var express = require('express');
var SHA1 = require('sha1');
var connection = require('./config.js');
var app= express();

module.exports.register=function(req,res){

	      var data={
          "email":req.body.email,
          "password":SHA1(req.body.password),
          "name":req.body.name,
					"gender":req.body.gender,
          "phone":req.body.phone
				}

    connection.query('INSERT INTO userdetail_tB SET ?',data,function(err,result){
    if(err) return res.send(err);
    else
      {
        return res.send("Successfully added");
      }

  });
}

/*app.listen(4000,()=>{console.log('Listening on port 4000')
});*/
