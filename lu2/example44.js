/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

   var callback = function (id,email){
       console.log('Email of id:' + id + 'is ' + email);
   };

    var customer = {
        id: 32,
        email: 'customer@golivelabs.io',
        eventHandler: function(fn) {
            fn(this.id, this.email);
        }
    };

    function causeEvent(_cust){
        _cust.eventHandler(callback);
    }

    causeEvent(customer);



});