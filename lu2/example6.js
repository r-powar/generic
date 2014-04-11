/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){

    var customer = {
        id: 272356158,
        email: "customer@mailnator.com"
    };

    customer.id = 32;
    console.log(customer.id);

    Object.defineProperty(customer, "id", {writable: false});

    customer.id = 64;
    console.log(customer.id);

    console.log(Object.getOwnPropertyDescriptor(customer, 'id'));

    Object.defineProperty(customer, 'id', {configurable: false});

    //Object.defineProperty(customer, "id", {writable: true});
    //console.log(customer.id);


});