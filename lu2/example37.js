/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    function multiplier(){
        var result = 1;

        if(Array.isArray(arguments[0])){

            for(var i = 0, len = arguments[0].length; i < len; i++){
                result = result * arguments[0][i];
            }
            return result;
        }
        else{

            for(i = 0, len = arguments.length; i < len; i++){
                result = result * arguments[i];
            }

            return result;
        }
    }

    var arr = [1,2,3,4,5];
    var m = multiplier(arr);
    console.log(m);

    m = multiplier(1,2,3,4,5);
    console.log(m);
//
    m = multiplier("1","2","3",4,5);
    console.log(m);





});