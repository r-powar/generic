/**
 * Created by Raj on 6/7/14.
 */


// if /states/ -> gives back liist of all states
// if /states/:stateid -> give back county info for that state


var states_Info = require('../data/statecode.js');
var county_info = require('../data/countyinformation.js');
var http = require('http');


exports.getStateInfo = function(req,res){
    res.json(200,states_Info.stateCode);
}

exports.cache = {};

//Return county info for a state code

exports.getCountyInfo = function(req,res){
    if(typeof exports.cache[req.params.stateid] === 'undefined'){
        http.get('http://api.sba.gov/geodata/city_county_links_for_state_of/'+req.params.stateid+'.json', function(response){
            console.log(response.statusCode);


            var complete_response = '';
            //on is registering a event handler on the response
            response.on('data',function(chunck_data){
                complete_response += chunck_data;
            });

            response.on('end', function(){
                exports.cache[req.params.stateid] = complete_response;
                res.json(200,{sba_gov_statusCode: response.statusCode,
                    data: complete_response});
            });
        });

    }else {
        res.json(200,{sba_gov_statusCode: 200,
            data: exports.cache[req.params.stateid]});
    }


}