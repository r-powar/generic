/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    var customer = {
       id: 32,
        email: "customer@mailinator.com"
    };

    var order1 = {
      id: 111,
        item: 'itemx'
    };

    var order2 = {
      id: 112,
        item: 'itemx'
    };

    console.log(customer);

    function addOrder(customer){
        if(!customer.orders){
            customer.orders =[];
        }

        for(var i = 1, len = arguments.length; i < len; i++)
        {
            arguments[0].orders.push(arguments[i]);
        }

        console.log(customer);
    }

    addOrder(customer,order1,order2);
    console.log(customer);



});