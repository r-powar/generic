/**
 * Created by Raj on 5/12/14.
 */
self.onmessage = function(e){

    var primes = [];
    var input_element;

    function loopspan() {
        var arr = []
        for (var i = 1; i < 100; i++) {
            if(isPrime(i)){
                arr.push(i);
            };
        }
        return arr;
    }


    function isPrime(n) {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;

    }

    self.postMessage(primes);

};