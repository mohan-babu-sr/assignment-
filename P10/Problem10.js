'use strict';

function findMax(ar)
{
    let i;
    let ma = ar[0];
    for (i = 1; i < ar.length; i++) {
        if (ar[i] > ma)
            ma = ar[i];
    }
    return ma;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(max);