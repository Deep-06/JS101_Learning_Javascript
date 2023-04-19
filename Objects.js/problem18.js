let array=[1,2,1,2];
//convert this into object and this should have how many times each element is present in the array.
//1:2
//2:2

let obj={};
for(let i=0;i<array.length;i++){
  if(obj[array[i]]==undefined){
    obj[array[i]]=1;
  }
  else{
    obj[array[i]]++;
  }
}
console.log(obj);