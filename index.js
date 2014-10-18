var http = require('http'),
    path = require('path'),
    express = require('express'),
    mongoose = require('mongoose')


var Switch = require('./models/switch');


var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));
//app.use(express.bodyParser());
app.use("/public",express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


var server = http.createServer(app);






app.get('/', function(req, res) {
  res.render('index.jade', { 
  });
});
 

app.get('/shinto', function(req, res) {

		//var msg = req.body;
 		//var from = req.body.From;

 			
		console.log(req.query.Body);


		//iswitch = new Switch({
	    //switchMsg:req;

	   // iswitch.save();

	//  });
  

});




app.get('/sms', function(req, res) {

	iswitch = new Switch({
	
	switchType: req.query.Body});

    iswitch.save();

	//	console.log(req.query.Body);

    res.send('<Response></Response>');
  

});

mongoose.connect('mongodb://heroku_app30064365:d0unhulra37196o0ljv5md5t97@ds039850.mongolab.com:39850/heroku_app30064365');

server.listen(app.get('port'), function() {
    console.log('Start server!');
});