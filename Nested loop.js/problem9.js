// prime no. from 1-10

for(let i=1;i<=10;i++){
let number=i;
let factor=0;
for(let i=1;i<=number;i++){
  
  if(number%i==0){
    factor++;
  }
}

if(factor==2){
  console.log(number,"is a prime no.");
}
else{  console.log(number,"is not a prime no.");
}
}
