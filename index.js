var http = require('http'),
    path = require('path'),
    express = require('express')

var app = express();

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.post('/sms', function(req, res) {

  var msg = req.body.Body;
  var from = req.body.From;
  sys.log('From: ' + from + ', Message: ' + msg);
  res.render('displaysms.jade', { 
            msg:msg,
            from:from
  });
});


server.listen(app.get('port'), function() {
    console.log('Start server!');
});