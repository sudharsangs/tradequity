var express = require('express');
var connection = require('./config.js');
var app= express();
var login = require('./login.js')

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

    connection.query('INSERT INTO sharedetail_tB SET ?',data,function(err,result){
      if(err) return res.send(err);
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
