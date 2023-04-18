let a=12;
let b=11;

if(true && true){
  if(!false || !true){
    if(a==b){
      a=b;
      b=a;
      console.log(a);
      console.log(b);
    }
  }
}