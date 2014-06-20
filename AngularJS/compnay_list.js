/**
 * Created by Raj on 6/19/14.
 */
window.onload = function(){
    var element = document.getElementById('CompanylistResults').firstElementChild.children;
    console.log(element);

    //We need to skip each <tr> hence the division by 2
    //

    var companies = (element.length - 1)/2;
    var arr_companies = [];
    for(var i =0; i < companies; i++){
        var td = element[2 * i + 1].firstElementChild;
        var td2 = element[2 * i + 1].children[1];
        if(td.firstElementChild){
//            console.log(td.firstElementChild.innerHTML);
            arr_companies.push({
                name: td.firstElementChild.innerHTML,
                symbol: td2.firstElementChild.firstElementChild.firstElementChild.innerHTML.toString().trim()
            })
        }
        else{
//            console.log(td.innerHTML);
            arr_companies.push({
                name: td.innerHTML,
                symbol: td2.firstElementChild.firstElementChild.firstElementChild.innerHTML.toString().trim()
            })
        }

    }
    console.log(JSON.stringify(arr_companies));



}