/**
 * Created by Raj on 3/19/14.
 */
$(document).ready(function(){

    var arr = [1,2,3,4,5,6,7,8,9];
    var arr_words = ['No', 'particular', 'order'];
    arr.reverse();
    arr_words.reverse();

    console.log(arr);
    console.log(arr_words);

   arr.sort();
    arr_words.sort();
    console.log(arr_words);
    console.log(arr);

    var sortFunction = function(a,b){
        return a.length < b.length;
    }

    arr_words.sort(sortFunction);
    console.log(arr_words);

    var data = [
        {id:11, item:'itemx'},
        {id: 12, item:'itemy'},
        {id: 800, item:'itemz'},
        {id: 22, item:'itema'},
        {id: 2, item:'itemb'},
        {id: 139, item:'itemc'},

    ];

    console.log(data);

    data.sort(function(a,b){
       return a.id > b.id;
    });

    console.log(data);
});