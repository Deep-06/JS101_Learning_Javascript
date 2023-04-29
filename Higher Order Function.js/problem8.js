// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let arr=[1, 2, 3, 4];
 let sum=0;
arr.forEach(function(a){
  if(a%2!==0){
   sum+=a; 
  } 
})
console.log(sum);