//Arguments object - no longer bound w/ arrow function
const add = function(a, b) {
  // console.log(arguments);
  return a + b;
}

console.log(add(3, 2, 55));