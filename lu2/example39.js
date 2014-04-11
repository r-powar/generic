/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    function CustomerConstructor(_id, _email){
        this.email = _email;
        this.id = _id;
        this.orders = [];
        this.addOrder = function(order){
            this.orders.push(order);
        }
    };

    CustomerConstructor.instances ++;

    CustomerConstructor.instances = 0;
    CustomerConstructor.predictTotalOrders = function(){
        return CustomerConstructor.instances * 10;
    };

    var customerx = new CustomerConstructor(1, 'customerx@golivelabs.io');
    var customery = new CustomerConstructor(2, 'customery@golivelabs.io');

    var order = {
        id: 132,
        item: 'itemx'
    };

    console.log(CustomerConstructor.instances);
    console.log(CustomerConstructor.predictTotalOrders());

    customerx.addOrder(order);
    console.log(customerx);




});