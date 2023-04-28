//HOF --> filter

let arr=["deep","ashu","luffy","ravi","tanmay","anu","luffy",];
//["luffy","tanmay","luffy"]

let result=arr.filter(function (a){
  //console.log(a);
  if(a[a.length-1]=="y"){
   return a;
  }
})
console.log(result); 
console.log(result.length);

//forEach
let count=0;
let output=result.forEach(function(a){
  if(a[a.length-1]!=="y"){
    count++;
  }
})
console.log(count);