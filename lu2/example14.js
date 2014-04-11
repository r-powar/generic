/**
 * Created by Raj on 3/17/14.
 */
$(document).ready(function(){
   var customer = {
       id: 32,
       email: 'customer@mailinator.com'
   };

    var serialized_customer = JSON.stringify(customer);
    console.log(serialized_customer);

    var customer_deserialized = JSON.parse(serialized_customer);
    console.log(customer_deserialized);

});
