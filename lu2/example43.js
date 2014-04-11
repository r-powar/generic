/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    var customer = {

        id:32,
        email: 'customer@mailinator.com'
    };

    function getOrders(){
        if(!this.orders){
            this.orders = [];

        }

        for(var i = 0; i < arguments.length; i++)
        {
            this.orders.push(arguments[i]);
        }

    }

    var orders = [{id:1, item: 'itemx'}, {id:2, item:'itemy'}];

    getOrders.call(customer, orders[0], orders[1]);
    console.log(customer);

    var orders2 = [{id: 3, item: 'itmea'}, {id:4, item: 'itemb'}];

    getOrders.apply(customer, orders2);
    console.log(customer);

    var customFunction = getOrders.bind(customer);

    var orders3 = {id:5, item:'itemd'};

    customFunction(orders3);
    console.log(customer);


});