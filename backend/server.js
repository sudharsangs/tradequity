	var express    = require("express");
	var bodyParser = require('body-parser');
	var connection = require('./config');
	var SHA1 = require('sha1');
	var app = express();
	var mysql = require('mysql');
	var cookieParser = require('cookie-parser');
	var session = require('express-session');
	var redis = require('redis');
	var redisStore = require('connect-redis')(session);
	var client  = redis.createClient();
	var share_connect = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database: 'sharedetails'
	});

	share_connect.connect(function(err) {
		if (err)
		  console.log("Connection error in Share Details");
		  else
		  console.log("Connected in Share Details!");

	  });

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	    next();
	});

	app.use(session({
	  secret: 'ssshhhhh',
	  // create new redis store.
	  store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
	  saveUninitialized: false,
	  resave: false
	}));
	app.use(cookieParser("secretSign#143_!223"));





	var router = express.Router();
	// test route
	router.get('/', function(req, res) {
	    res.json({ message: 'welcome to tradequity' });


	});

	//route to handle user registration
	app.post('/register',function(req,res){


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

	  var create = `CREATE TABLE user${uid}(sno TINYINT PRIMARY KEY AUTO_INCREMENT, company VARCHAR(50), symbol VARCHAR(25),count INT(100) ,cost INT(100), currency VARCHAR(20),date VARCHAR(250),market varchar(25))`;

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
	});

	app.post('/login',function(req,res){

	    var email = req.body.email;
	    client.set('email',req.body.email);
	    req.session.email=req.body.email;
	    var password = req.body.password;
	    var encrypted = SHA1(password);
	    connection.query('SELECT * FROM userdetail_tB WHERE email = ?',[email], function (error, results, fields) {

	    if (error) {
	       console.log("error ocurred",error);
	    }
	    else{



	            if(results.length >0)
	            {



	                 if(results[0].password == encrypted)
	                   {

	                    return res.send("200").end('done');
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



	    });
	  });

	  //global.loginEmail;
	  //var uid;
	  client.get('email',function(err,reply){
	    if(err) throw err;
	    console.log(reply);
	    passVal1(reply);
	  })

	  function passVal1(x){
	    global.loginEmail = x;
	    console.log(x);
	    console.log(global.loginEmail);



	  function setValue1(value) {
	    uid = value.uid;
	    console.log(value.uid);
	    console.log((JSON.parse(JSON.stringify(uid))));
	  }
	var sql = `SELECT uid FROM userdetail_tB WHERE email="${global.loginEmail}"`;
	connection.query(sql,function(err, rows){
	  if(err) {
	    throw err;
	  } else {
	    console.log(rows);
	    setValue1(rows[0]);
	  }
	});

	app.post('/edit',function(req,res){


	        //"sno":req.body.sno,
	        var company=req.body.company;
	        var symbol=req.body.symbol;
	        var count=req.body.count;
	        var cost=req.body.cost;
	        var currency =req.body.currency;
	        var date=req.body.date;
	        var market=req.body.market;
	        var sno=req.body.sno;



	       console.log(uid);


	share_connect.query(`UPDATE user${uid} SET company=?,symbol=?,count=?,cost=?,currency=?,date=?,market=? WHERE sno=?`,[company,symbol,count,cost,currency,date,market,sno],function(err,result){
	  if(err) console.log(err);
	  else
	    {
	     // connection.query('SELECT * FROM sharedetail_tB WHERE mail = ?',[login.mail], function (error, results, fields) {
	        return res.status(200).send(JSON.stringify(result));

	      //});

	    }


	});
	});
	 }

	client.get('email',function(err,reply){
		if(err) throw err;
		console.log(reply);
		passVal2(reply);
	})

	function passVal2(x){
		global.loginEmail = x;
		console.log(x);
		console.log(global.loginEmail);



	function setValue2(value) {
		uid = value.uid;
		console.log(value.uid);
		console.log((JSON.parse(JSON.stringify(uid))));
	}
	var sql = `SELECT uid FROM userdetail_tB WHERE email="${global.loginEmail}"`;
	connection.query(sql,function(err, rows){
	if(err) {
		throw err;
	} else {
		console.log(rows);
		setValue2(rows[0]);
	}
	});

	app.post('/delete',function(req,res){



				var sno=req.body.sno;



			 console.log(uid);


	share_connect.query(`DELETE FROM user${uid} WHERE sno=?`,[sno],function(err,result){
	if(err) console.log(err);
	else
		{
		 // connection.query('SELECT * FROM sharedetail_tB WHERE mail = ?',[login.mail], function (error, results, fields) {
				return res.status(200).send(JSON.stringify(result));

			//});

		}


	});
	});
	}




app.use('/api', router);
app.listen(4000,()=>{console.log('Listening on port 4000')
});
