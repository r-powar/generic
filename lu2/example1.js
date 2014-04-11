/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){
    var customer = {
        id: 272356158,
        phone: "(408)431-1295",
        email: "customer@mailinator.com",
        address: {
            city: "Sunnyvale",
            zip: "95129"
        },
        "custom field": "...notes on customer..."

    };

    console.log(customer.id);
    console.log(customer.address.city);
    console.log(customer["id"]);
});