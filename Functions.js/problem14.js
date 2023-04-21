function even_odd(a){
  if(a%2==0){
    return true;
  }
  else{
    return false;
  }
}

let arr=[2,2,3,7,4,9,7,5];
let even_count=0;
let odd_count=0;
for(let i=0;i<arr.length;i++){
  let result=even_odd(arr[i]);
  if(result==true){
    even_count++;
  }
  else{
    odd_count++;
  }
}
if(even_count>odd_count){
  console.log("even count=",even_count);
}
else if(odd_count>even_count){
  console.log("odd count=",odd_count);
}
else{
  console.log("same");
}