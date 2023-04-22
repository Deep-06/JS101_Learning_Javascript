// Write a function to convert a character to lower case
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
//Sample Output ["ma", "sa", "i", "sch", "ool"]
function tolower(char){
  let lower="qwertyuiopasdfghjklzxcvbnm";
  let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
  for(let i=0;i<upper.length;i++){
    if(char==upper[i]){
      return lower[i];
    }
  }
}
function convertlower(word){
  let bag="";
  for(let i=0;i<word.length;i++){
 let x=tolower(word[i]);   
    bag+=x;
  }
  return bag;
}

let arr=["MA", "SA", "I", "SCH", "OOL"];
let output=[];
for(let j=0;j<arr.length;j++){
 output.push(convertlower(arr[j])); 
}
console.log(output);
