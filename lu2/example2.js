/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){
    console.log(typeof 32);
    console.log(typeof "This is a string");
    console.log(typeof function() {});
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof true);
    console.log(typeof 3.14);


    var a =32, b = "This is a string", c=function(){},d = undefined, e = null, f = false;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);



});
