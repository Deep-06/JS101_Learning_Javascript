// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]

let arr=[1,2,3];
let x=arr.filter(function(a){
  if(a%2===1){
    return a;
  }
})
console.log(x);