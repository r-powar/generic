/**
 * Created by Raj on 3/17/14.
 */
$(document).ready(function(){

    var customername = "John Smith";

    var names = customername.split(' ');
    console.log('First Name: '+ names[0]);

    console.log(customername.slice(0,4));
    console.log(customername.slice(-5));

    console.log(customername.indexOf('h'));
    console.log(customername.lastIndexOf('h'));

    console.log(customername.charAt(5));
    console.log(customername[5]);





});