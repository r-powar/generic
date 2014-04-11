/**
 * Created by Raj on 3/17/14.
 */
$(document).ready(function(){
   var num1 = new Number(22);
    var num2 = 22;

    console.log(num1 * 100);
    console.log(num2 * 100);

    console.log(num1);
    console.log(num2);

    console.log('typeof num1: '+ typeof num1);
    console.log('typeof num2: '+ typeof num2);

    console.log(1/0);
    console.log(1/-0);
    console.log(1/'32');
    console.log('hello'/2);
    console.log(0/0);

    var number = 738.222;

    console.log(number.toExponential());
    console.log(number.toExponential(4));

    console.log(number.toPrecision());
    console.log(number.toPrecision(3));

    console.log(number.toString());
    console.log(number.toString(36));


});
