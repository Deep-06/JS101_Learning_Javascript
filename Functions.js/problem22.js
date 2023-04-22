let arr=[3,4,6,4,6,7];

function sumofarray(a){
  let sum=0;
  for(let i=0;i<a.length;i++){
  if(a[i]===[]){
    return 0;
  }
  else{
    sum+=a[i];
  }
  }
  return sum;
}
//let x=sumofarray(arr);
//console.log(x)

let average=(sumofarray(arr)/arr.length);
 console.log(average);