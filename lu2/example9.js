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
    customerA.phone  = "323456789";

    console.log(customerA);
    delete customerA.gender;
    console.log(customerA);

    delete customerA.id;
    console.log(customerA);

    var res_del_phone = delete customerA.phone;
    console.log(res_del_phone);

    var res_del_email = delete customerA.email;
    console.log(res_del_email);
});