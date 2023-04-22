function checkodd(a){
    if(a%2==0){
      return false;
    }
  return true;
}
//odd no. between 0-10

for(let i=0;i<=10;i++){
  if(checkodd(i)==true){
    console.log(i);
  }
  
}