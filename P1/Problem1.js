'use strict';
/*Create a function that receives an array of numbers and returns an array containing only the positive numbers
    function getPositives(numbersArray) {
        //TODO::
    }
    getPositives([1,-3,-5,10,20,-30,-40]);

Ex: getPositives([1,-3,-5,10,20,-30,-40])
      Result: 1,10,20
*/



function getPositives(numbersArray) {
    let pnumber=[];
    for(let i=0;i<numbersArray.length;i++){
        if(numbersArray[i]>=0){
            pnumber.push(numbersArray[i]);
        }
    }
    console.log(pnumber);
}
getPositives([1,-3,-5,10,20,-30,-40]);
