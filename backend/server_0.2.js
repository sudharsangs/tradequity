var express    = require("express");
var loginController=require('./login');
var registerController=require('./register');
var stockController=require('./stock');
var adminController=require('./admin')
var bodyParser = require('body-parser');
var app = express();
var redisStore = require('connect-redis')(session);
var session = require('express-session');
var redis = require('redis');
var client  = redis.createClient();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
app.post('/register',registerController.register);
app.post('/login', loginController.login);
app.post('/stock', stockController.stock);
app.post('/admin', adminController.admin)
app.use('/api', router);
app.listen(4000,()=>{console.log('Listening on port 4000')
});
