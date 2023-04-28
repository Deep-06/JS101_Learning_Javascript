let arr=["mom","deep","ram","sita","ashu","anu"];
//length odd
let x=arr.filter(function(a){
  if(a.length%2!==0){
    return a;
  }
})
console.log(x);
//odd index
x.filter(function(a,b){
  if(b%2!==0){
    console.log(a);
  }
})


//forEach
// x.filter(function(a,b){
//   if(b%2!==0){
//     console.log(a);
//   }
// })