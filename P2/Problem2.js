'use strict';
/*Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the negative numbers

        function getNegatives(numbersArray){
    
        }
        getNegatives([1,-3,-5,10,20,-30,-40])

        Ex: getNegatives([1,-3,-5,10,20,-30,-40])
        Result: [-3,-5,-30,-40]
*/

function getPositives(numbersArray) {
    let nnumber=[];
    for(let i=0;i<numbersArray.length;i++){
        if(numbersArray[i]<0){
            nnumber.push(numbersArray[i]);
        }
    }
    console.log(nnumber);
}
getPositives([1,-3,-5,10,20,-30,-40]);