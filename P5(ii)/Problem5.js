'use strict';

function sumDigits(n)
    {
    var sum = 0;
    while (n != 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    return sum;
    }
var sum = sumDigits(123);
console.log(sum);