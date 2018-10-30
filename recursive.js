function filter(arr, fn) {
      return arr.length === 0 ? arr : (fn(arr[0]) ? [arr[0]] : []).concat(filter(arr.slice(1), fn));
    }
  
    
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});
    
console.log(filteredNames);