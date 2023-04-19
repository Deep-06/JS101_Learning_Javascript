let arr=[1,2,3,4,5,6,7,1,2,3,5,5];

let obj={};
for(let i=0;i<arr.length;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++;
  }
}
console.log(obj);
//for .. in loop
let sum=0;
for(let a in obj){
  if(obj[a]>=2){
    console.log(Number(a));
    sum+=Number(a);
  }
}
console.log(sum);
//add the key whose occurence is greater or equal to 2

