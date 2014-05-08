/**
 * Created by Raj on 4/20/14.
 */
console.log('starting compute intensive task---');
var x = 50000;
while(x > 0){
    var t = x * x * x;
    x--;
    console.log('cube of ' + x + 'is'+ t);
}
console.log('compute intesive task ended-----');
