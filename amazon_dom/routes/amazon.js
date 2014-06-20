/**
 * Created by Raj on 6/10/14.
 */
//exports.cache = {};
exports.getValue = function(searchterm, callback){
    var jsdom = require("jsdom");
    var imgs = [];

    jsdom.env(
        "http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=" + searchterm,
        ["http://localhost:3000/bower_components/jquery/dist/jquery.js"],
        function (errors, window) {
            window.$('.productImage').each(function(){

               imgs.push(this.src);
                //console.log(imgs);
            });
            console.log(imgs);
            callback(imgs);
//            return imgs;
//            return "buyt";
        }

    );

}
