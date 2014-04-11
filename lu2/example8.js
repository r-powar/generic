/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){
   var customer = {
       id: 32,
       email: 'customer@mailinator.com'
   };

    var customerA = Object.create(customer,{
        gender: {
            value:'male',
            writable: true,
            enumerable: true,
            configurable: false
        }
    });


    console.log(customerA);
});