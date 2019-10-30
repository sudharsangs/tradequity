var express = require('express');
var connection = require('./config.js');
var app= express();

module.exports.stock=function(req,res){

	      var data={
          "company":req.body.company,
          "symbol":req.body.symbol,
          "cost":req.body.cost,
		  "currency":req.body.currency,
          "market":req.body.market,
          "date":req.body.date
		}

    connection.query('INSERT INTO sharedetail_tB SET ?',data,function(err,result){
    if(err) return res.send(err);
    else
      {
        return res.send("Successfully added");
      }

  });
}

/*app.listen(4000,()=>{console.log('Listening on port 4000')
});*/
