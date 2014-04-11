/**
 * Created by Raj on 3/19/14.
 */
$(document).ready(function(){

    var arr = ['asdf',1,5,'customer@golivelabs.io', 7,8];

    console.log(arr.slice(0,3));
    console.log(arr.slice(2,5));
    console.log(arr.slice(1,-1));
    console.log(arr.slice(-5,-3));
    console.log(arr);

    console.log(arr.splice(0,2));
    console.log(arr);

    arr= [1,2,3];
    var arr2 = [4,5,6];
    var arr3 = [[7,8], [9,10]];
    var arr4 = [7,8];

    console.log(arr.concat(arr2));
    console.log(arr.concat(arr3));
    console.log(arr.concat(arr2,arr4));



});