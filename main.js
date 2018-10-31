'use strict';

// function maxNum(num) {
    
//   if(num.length === 0){
//     return 0;
//   }
//   let index = num.length;
//   let currentMax = 0;
//   while (index != -1) {
        
//     if(num[index] > currentMax ){
//       currentMax = num[index];
//     }
//     --index;
//   }
    
//   return currentMax;

// }

// function minNum(num) {
//   if(num.length === 0){
//     return 0;
//   }
//   let index = num.length;
//   let currentMin = 10;
//   while (index != -1) {
        
//     if(num[index] < currentMin ){
//       currentMin = num[index];
//     }
//     --index;
//   }
    
//   return currentMin;
// }


// console.log(maxNum([1,2,3]));
// console.log(minNum([1,2,3]));


// function average(num) {
//   // return num.reduce((num, total) => num + total)
//   let runningTotal = 0;
//   num.forEach(function(element){
//     runningTotal += element;
//   });
//   return runningTotal/num.length;
// }

// console.log(average([1,2,3]));


// function repeat(fn,n) {

//   for (let index = 0; index < n; index++) {

//     fn();

//   }
// }

// function hello() {
//   console.log("hello world");
// }
// function goodbye() {
//   console.log("Goodbye World")
// }

// repeat(hello,5);
// repeat(goodbye,5);

const resultArray = [];
const filter = (arr, fn) => arr.forEach(element => fn(element) ? resultArray.push(element) : 0);//.filter(element => element);
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, function(name) {
  return name[0] === 'R';
});

//console.log(filteredNames);
console.log(resultArray);

// const filter = (arr, fn) => arr.map(element => fn(element) ? element : null).filter(element => element);
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// const filteredNames = filter(myNames, function(name) {
//   return name[0] === 'R';
// });



// function filter(arr, fn) {
// //   let newArray = [];
// //   for (let index = 0; index < arr.length; index++) {
// //     if (fn(arr[index])){
// //       newArray.push(arr[index]);
// //     }
// //   } return newArray;
// // }
//   // let newArray = [];
//   // arr.forEach(element => fn(element) ? newArray.push(element) : 0);
//   // return newArray;

 
//   return arr.map(element => fn(element) ? element : null).filter(element => element);


//   // let newArray = [];
//   // for (let index = 0; index < arr.length; index++) 
//   //   newArray.push(arr => arr[index]);
  
//   // return newArray;
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });





// console.log(filteredNames); // => ['Rich', 'Ray']



// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
  
//   return function (location) {
//     warningCounter++;
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//     if (warningCounter === 1){ 
//       console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
//     } else {
//       console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
//     }
//   };
  
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const lostDog = hazardWarningCreator('help my dog is lost');
// const hailStorm = hazardWarningCreator('Hail storm');

// rocksWarning('everywhere');
// rocksWarning('nowhere');
// lostDog('dog park');
// hailStorm('america');


// function turtleSteps(array){
//   let newArray = [];
//   array.filter(element => element[0] >= 0 && element[1] >= 0)
//               //.map(element => element[0] + element[1]);
//               .forEach(element => newArray.push(element[0] + element[1]));
//   return newArray;
// }

// const turtleFilter = array => array.filter(element => element[0] >= 0 && element[1] >= 0);

// const turtleCounter = array => array.map(element => Math.abs(element[0]) + Math.abs(element[1]));

// const turtleCounterLog = array => array.forEach(element => console.log(Math.abs(element[0]) + Math.abs(element[1])));


// let stepArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// console.log(turtleFilter(stepArray));
// console.log(turtleCounter(stepArray));
// turtleCounterLog(stepArray);


// function decoderRing(words) {
//   return words.split(' ').reduce((accumulator, word) => word.length === 3 ? accumulator + ' ' : accumulator + word[word.length-1].toUpperCase(), '');
// }

// const decoderRing = words => words.split(' ').reduce((accumulator, word) => word.length === 3 ? accumulator + ' ' : accumulator + word[word.length-1].toUpperCase(), '');



// function decoderRing(words) {
//   let input = words.split(' ');
  
//   return input.reduce(function (accumulator, word) {
//     if(word.length === 3){
//       return accumulator += ' ';
//     }else{
//       return accumulator += word[word.length-1].toUpperCase();
//     }

//   }, '');
// }



// console.log(decoderRing('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));