/**
 * Created by Raj on 3/18/14.
 */
$(document).ready(function(){

    var arr =[];

    arr[0] = 1 + 2 + "hello";
    arr[1] = "hello" + 1 + 2;
    arr[2] = (false) ? 'First conditional' : (false) ? 'Second True' : 'Second False';

    console.log(arr.join('\n'));


});