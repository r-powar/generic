/**
 * Created by Raj on 3/16/14.
 */
$(document).ready(function(){
   var x = .3;
   var y = .2;
   var z = .1;

    console.log((x-y) === z);

    var currency = {
        _val: 0,

        get dollars() {return this._val/100;},
        set dollars(_inpval) {this._val = _inpval * 100;},
        get cents() {return this._val}
    };

    x = Object.create(currency);
    x.dollars = .3;
    y = Object.create(currency);
    y.dollars = .2;
    z = Object.create(currency);
    z.dollars = .1;

    console.log((x.cents - y.cents) === z.cents);

});