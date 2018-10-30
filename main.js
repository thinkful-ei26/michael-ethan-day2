'use strict';

function maxNum(num) {
    
  if(num.length === 0){
    return 0;
  }
  let index = num.length;
  let currentMax = 0;
  while (index != -1) {
        
    if(num[index] > currentMax ){
      currentMax = num[index];
    }
    --index;
  }
    
  return currentMax;

}

function minNum(num) {
  if(num.length === 0){
    return 0;
  }
  let index = num.length;
  let currentMin = 10;
  while (index != -1) {
        
    if(num[index] < currentMin ){
      currentMin = num[index];
    }
    --index;
  }
    
  return currentMin;
}


console.log(maxNum([1,2,3]));
console.log(minNum([1,2,3]));


function average(num) {
  // return num.reduce((num, total) => num + total)
  let runningTotal = 0;
  num.forEach(function(element){
    runningTotal += element;
  });
  return runningTotal/num.length;
}

console.log(average([1,2,3]));

