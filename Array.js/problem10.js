
//1 array-->small case character
//2 array -->capital case character

let small_case= ["a","b","c","d","e"];

let capital_case= ["A","B","C","D","E"];

let character= "e"; 
for(let i=0; i<small_case.length; ++i){
  if(small_case[i]==character){
    character=capital_case[i];
  }
}
console.log(character);