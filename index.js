var http = require('http'),
    path = require('path'),
    express = require('express'),
    mongoose = require('mongoose');


var Switch = require('./models/switch');


var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('Cookie Monster!'));
app.use(express.session());
app.use(express.static(__dirname + '/public'));
app.use("/public",express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
    app.use(express.errorHandler());
});

var server = http.createServer(app);



mongoose.connect('mongodb://heroku_app30804062:heroku_app30804062@ds045970.mongolab.com:45970/heroku_app30804062');



app.post('/', function(req, res) {
  res.render('index.jade', { 
  });
});
 



app.post('/sms', function(req, res) {


	 var msg = req.body.Body;
 		var from = req.body.From;	



	//Switch.findOne({}, {}, { sort: { '_id' : -1 } }, function(err, switchItem) {
  		
		//if (!switchItem.off){

			//Post request to say it is error

		//}
		//else{

			//Do what people do
		//}


//  		console.log( post );
//});

 // var msg = req.body.Body;
 //var from = req.body.From;
  
	system.log(req.body);
  //console.log('From: ' + from + ', Message: ' + msg);

});


server.listen(app.get('port'), function() {
    console.log('Start server!');
});