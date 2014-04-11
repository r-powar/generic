/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){

    var customer = {
        id: 32,
        email: 'customer@mailinator.com'
    };

    var customerA = Object.create(customer);

    customerA.gender = "female";

    console.log(Object.isExtensible(customerA));
    Object.preventExtensions(customerA);
    customerA.orders = 100;
    console.log(customerA);

    Object.seal(customerA);
    customerA.orders = '100';
    console.log(customerA);

    Object.freeze(customerA);
    customerA.orders = 100;
    console.log(customerA);




});