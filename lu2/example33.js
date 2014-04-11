/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    console.log(x);

    console.log(CustomerFunction1);
    console.log(CustomerFunction2);
    console.log(CustomerFunction2(10));

    var x = 32;

    var CustomerFunction1 = function(_id, _email){
        this.id = _id;
        this.email = _email;
    }

    function CustomerFunction2(n){
        return n * 2;

    }
});