/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){
    function Customer()
    {

    }

    var customerA = new Customer();
    console.log("typeof customerA: " + typeof customerA);
    console.log("Is customerA a Customer?: " + (customerA instanceof Customer));

});