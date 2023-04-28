let arr=["deep","ashu","luffy","ravi","tanmay","anu","luffy",];

//output length of each str

let result=arr.map(function(a){
 //console.log(a.length);
  return a.length;
}) .filter(function(a){
  if(a%2===0){
    return a;
  }
})
console.log(result);
//console.log(result);

//filter--even no.

// let output=result.filter(function(a){
//   if(a%2===0){
//     return a;
//   }
// })
// console.log(output);