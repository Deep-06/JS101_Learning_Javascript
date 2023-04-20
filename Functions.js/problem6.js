function check_prime(a){
  let count=0;
  for(let i=1;i<=a;i++){
    if(a%i==0){
      count++;
    }
  }
  if(count==2){
  console.log(a,"is prime");  
  }else{
    console.log(a,"is Not prime");
  }
}

for(let i=1;i<=10;i++){
  check_prime(i);
}