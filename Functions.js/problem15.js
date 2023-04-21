let arr=["luffy","mommy","dad","zoro"];
//result--> ["yfful","ymmom","dad","oroz"]

function reverse_string(a){
  let bag="";
  for(let i=a.length-1;i>=0;--i){
    bag+=a[i];  
  }
  return bag;
}
  

  let newarr=[];
for(let i=0;i<arr.length;i++){
  let result=reverse_string(arr[i]);
newarr.push(result);
}

console.log(newarr);