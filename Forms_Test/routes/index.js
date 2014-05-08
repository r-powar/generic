
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

var testinfo = require('../testinfo.js');


  exports.deliverTest = function(req, res){
        if (req.query.format && req.query.format === 'json')
            res.json(200, {testdata: testinfo.getTestData(req.params.id)});
        else
            res.render('testpage', {title:'Test ID: ' + req.params.id, testdata: testinfo.getTestData(req.params.id)});
    };

