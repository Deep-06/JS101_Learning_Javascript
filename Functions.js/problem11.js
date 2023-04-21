//prime no. from 2 to 20

function check_prime(a){
  let count=0;
  for(let i=1;i<=a;i++){
    if(a%i==0){
      count++;
    }
  }
  if(count==2){
  console.log(a,"is prime");  
  }
}

for(let i=2;i<=20;i++){
  check_prime(i);
}