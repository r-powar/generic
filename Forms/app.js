
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
//var email   = require("./path/to/emailjs/email");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//var server  = email.server.connect({
//    user:    "username",
//    password:"password",
//    host:    "smtp.gmail.com",
//    ssl:     true
//
//});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/contact',function(req,res){


    res.render('contact');

});

app.post('/contact/submitted', function(req,res){

//    server.send({
//        text:    "i hope this works",
//        from:    "you <arcoboy7@gmail.com>",
//        to:      "someone <raaj.powar@gmail.com>",
//        //cc:      "else <else@gmail.com>",
//        subject: "testing emailjs"
//    }, function(err, message) { console.log(err || message); });

    console.log(req.body);//prints a json object
    res.send('Thank You for contacting us, '+ 'You have picked: ' + req.body.dev);


});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
