/**
 * Created by Raj on 3/17/14.
 */
$(document).ready(function(){

    var arr = [];

    arr[0] = 1 + "2";
    arr[1] = 2 * "2";
    arr[2] = 1 + "hello";
    arr[3] = [3] + 4;
    arr[4] = [3] * 4;
    arr[5] = 1 * "one";
    arr[6] = (undefined === null);
    arr[7] = (undefined == null);

    console.log(arr.join('\n'));


});