var express = require('express');
var connection = require('./config.js');
var app= express();
var login = require('./login.js');
var session = require('express-session');

module.exports.stock=function(req,res){

	      var data={
          "mail": login.email,
          "symbol":req.body.symbol,
          "count":req.body.count,
          "cost":req.body.cost,
          "company":req.body.company,
		      "currency":req.body.currency,
          "date":req.body.date,
          "market":req.body.market
    }
    
    var sql = `SELECT uid FROM userdetail_tB WHERER email=${req.session.email}`;
    var uid;
    connection.query(sql,function(err, rows){
      if(err) {
        throw err;
      } else {
        setValue(rows);
      }
    });
    
    function setValue(value) {
      uid = value;
      console.log(someVar);
    }

    connection.query(`INSERT INTO user${uid} SET ?`,data,function(err,result){
      if(err) console.log(err);
      else
        {
         // connection.query('SELECT * FROM sharedetail_tB WHERE mail = ?',[login.mail], function (error, results, fields) {
            if(err) res.send(err);
            else {
              return res.status(200);
            }
                
          //});

        }

  });
}

/*app.listen(4000,()=>{console.log('Listening on port 4000')
});*/
