'use strict';
/*Create a function that receives an array of numbers and returns an array containing only the positive numbers (Must use Array.filter)
     function getPositives(numbersArray) {
        //TODO Write coding by using Array.filter 
     }
    getPositives([1,-3,-5,10,20,-30,-40]);

Ex: getPositives([1,-3,-5,10,20,-30,-40])

    Result: 1,10,20

*/

function getPositives(numbersArray) {
    let pos_nums;
    pos_nums = numbersArray.filter(getPos => getPos > 0);
    return pos_nums;
 }
let output=getPositives([1,-3,-5,10,20,-30,-40]);
console.log(...output);