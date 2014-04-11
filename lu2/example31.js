/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    console.log(factorial(5));

    function factorial(n){
        if(n <= 1){
            return 1;

        }
        else{
            return n * factorial(n-1);
        }
    }
});