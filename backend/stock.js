var express = require('express');
var connection = require('./config.js');
var app= express();
var register = require('./register.js')

module.exports.stock=function(req,res){

	      var data={
          "email": register.email,
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
          return res.send('200');
        }

  });
}

/*app.listen(4000,()=>{console.log('Listening on port 4000')
});*/
