// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let arr=["assignment", "problem", "media", "upload"];
let x=arr.filter(function(a,b){
  if(a[0]=="a" || a[a.length-1]=="a"){
    return a;
  }
})
console.log(x);