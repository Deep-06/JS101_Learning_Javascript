// Given an array of strings print the length of each string

let arr=["apple", "windows", "ubuntu"];
let x= arr.map(function(a){
  return Number([a.length]);
})
console.log(x);