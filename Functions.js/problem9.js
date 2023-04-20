function check_prime(a){
  let count=0;
  for(let i=1;i<=a;i++){
    if(a%i==0){
      count++;
    }
  }
  if(count==2){
  //console.log(a,"is prime"); 
    return true;
  }else{
    //console.log(a,"is Not prime");
    return false;
  }
}

for(let i=1;i<=10;i++){
let result=check_prime(i);
 
(result==true) ? console.log(i,"is prime") : console.log(i,"is not prime ")
 
  
}
