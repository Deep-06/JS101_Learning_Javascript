// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

let arr=["Masai", "School"];
let x=arr.map(function(a,b){
 return a[0];
})
console.log(x);