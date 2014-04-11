/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){

    var customer = {
        id: 32,
        email: "customer@mailinator.com"
    };

    var customerA = Object.create(customer);
    customerA.gender = "male";
    customerA.phone = "323456789";
    Object.defineProperty(customerA, 'phone', {enumerable:false});

    console.log(customerA);
    console.log(customer);

    console.log('id' in customerA);
    console.log('gender' in customerA);

    console.log(customerA.hasOwnProperty('id'));
    console.log(customerA.hasOwnProperty('gender'));

    console.log(customerA.propertyIsEnumerable('id'));
    console.log(customerA.propertyIsEnumerable('gender'));
    console.log(customerA.propertyIsEnumerable('phone'));

    for(var prop in customerA){
        console.log(prop + ': '+ customerA[prop]);

    }

    for (prop in customerA){
    console.log(Object.keys(customerA));
    }



});