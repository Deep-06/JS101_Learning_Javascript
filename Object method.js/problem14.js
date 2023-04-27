let arr=[1,2,3,4,5,6];

function power(arr,n){
let newarr=[];
for(let i=0;i<arr.length;i++){
  newarr.push(arr[i]**n);
}
//console.log(newarr);
  return newarr;
}

let result=power(arr,2);
console.log(result);
