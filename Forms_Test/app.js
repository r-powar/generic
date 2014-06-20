
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var testinfo = require('./testinfo.js');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({uploadDir: './uploadedData'}));
app.use(express.multipart());
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

app.get('/uploadfile', function(req,res){
    //renders a view
    res.render('upload');
});

app.post('/uploadfile_submitted', function(req,res){

   console.dir(req.files);
   res.render('uploadfile_submitted', {name: req.body.name});

});


app.get('/test/:testid', function(req, res){

    fs.readFile('./uploadedData/' + req.params.testid + '.json', function(err, data){
        if (err) {
            res.render('test', { err: err.message });
        } else {
            var obj = JSON.parse(data.toString('utf-8'));
            res.render ('test', {
                err: false,
                questions: obj.questions
            });
        }

    });
});

app.get('/test',function(req,res){
   res.render('test');
});


app.post('/test_submitted',function(req,res){

    console.log(req.body);
    res.json(200,{
        message: 'successfully added' + req.body
    });
});

app.get('/ajaxcall',function(req,res){
    res.render('ajaxcall');
});

app.post('/person_submitted',function(req,res){

    console.log(req.body);
    res.json(200,{
        message: 'successfully added' + req.body.name
    });
});

app.get('/tests',function(req,res){
    res.render('tests');
});

app.get('/signup', function(req,res){
   res.render('signup');
});

app.get('/tests/list', function(req,res){
    res.render('list', {testids: testinfo.testids()});
});

//app.get('/tests/:id', function(req,res){
//
//    console.log(req.params);
//    res.render('testid',{id: req.params.id});
//
//});

//var testinfo = require('./testinfo.js');

app.get('/tests/:id', routes.deliverTest);


app.get('/uploadtest', function(req,res){
    res.render('uploadtest');
});

app.post('/submitted',function(req,res){
    console.log(req.body);

    res.json(200,{
        message: 'successfully added' + req.body
    });
});





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
