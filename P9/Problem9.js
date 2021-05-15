'use strict';
/*Create a function that will merge two arrays and return the result as a new array
    function mergeArrays(ar1, ar2) {

  }

    Ex: var ar1 = [1, 2, 3];
        var ar2 = [4, 5, 6];
        mergeArrays(ar1, ar2);
        result: [1,2,3,4,5,6]


*/
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
mergeArrays(ar1, ar2);

function mergeArrays(ar1, ar2) {
    var arr=ar1.concat(ar2);
    console.log(arr);
}