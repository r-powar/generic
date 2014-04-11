/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    var customer = {
        id: 32,
        email: "customer@mailinator.com"
    };

    var order = {
        id: 111,
        item: 'itemx'
    };

    function addOrder(customer, order){
        if(!customer.orders){
            customer.orders = [];

        }

        customer.orders.push(order);

    }

    addOrder(customer,order);
    console.log(customer);



});