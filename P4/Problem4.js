'use strict';

function findFibonacci(n) {
    //TODO: write code
    if (n <= 1) {
        return n;
    }
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
var n = findFibonacci(10);
 
console.log(n);