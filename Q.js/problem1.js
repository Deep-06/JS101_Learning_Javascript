let money=0;
let batman=1;
let ironman=1;
for(i=1;i<=5;i++){
  ironman=ironman*i*money;
  for(let j=0;j<=5;j++){
    batman=batman*j*i;
  }
}console.log(ironman,batman);