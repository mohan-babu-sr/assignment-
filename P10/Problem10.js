'use strict';

function getDistinctElements(ar)
{
    let sol=new Set(ar);
    return sol;
}
let output=getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(...output);