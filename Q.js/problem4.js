let sum=1;
for(let i=0;i<3;i++){
  for(let j=3;j>=0;j--){
    if(Math.abs(i-j)>2){
      sum+=j;
    }
  }
  sum++
}
console.log(sum);