
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var amazon = require('./routes/amazon');

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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

//app.get('/index',function(req,res){
//    res.render('index',{
//        data: amazon.getValue()
//    })
//});

app.get('/imageinfo', function(req, res){
    console.log(req.query.search);
    amazon.getValue(req.query.search, function (imgs){
        res.json(200, imgs);
    });
});

//app.get('/index', amazon.getValue);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
    //amazon.getValue();

});
