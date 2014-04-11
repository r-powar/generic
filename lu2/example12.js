/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){
   var customer = {
       id: 32,
       email: 'customer@mailinator.com'
   } ;

    var customerA = Object.create(customer);
    var customerB = {
        id: 64,
        email: 'customerB@mailinator,com'

    };

    function Customer(_id, _email){
        this.id = _id;
        this.email = _email;

    }

    var customerC = new Customer(128, 'customerC@mailinator.com');

    console.log(Object.getPrototypeOf(customerA));
    console.log(Object.getPrototypeOf(customerB));
    console.log(Object.getPrototypeOf(customerC));

    console.log(customer.isPrototypeOf(customerA));
    console.log(Object.prototype.isPrototypeOf(customerB));
    console.log(Customer.prototype.isPrototypeOf(customerC));



});