// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST

function swap(str){
  let lower="qwertyuiopasdfghjklzxcvbnm";
  let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
  let bag="";
  for(let i=0;i<str.length;i++){
    for(let j=0;j<lower.length;j++){
      if(str[i]==lower[j]){
        bag+=upper[j];
      }
      else if(str[i]==upper[j]){
        bag+=lower[j];
      }
    }
  }
  return bag;
}

let str="Test";
let output=swap(str);
console.log(output);