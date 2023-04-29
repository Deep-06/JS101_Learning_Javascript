// Given an array of numbers find the sum of cubes if the number is divisible by 3 
//Sample Input - [1, 2, 3, 4, 5, 6] 
//Sample Output - 243 (27+216)

let arr=[1, 2, 3, 4, 5, 6];
let sum=0;
let x=arr.filter(function(a){
if(a%3===0){
  return a;
}
}).forEach(function(a){
  sum+=(a**3);
})
console.log(sum);
