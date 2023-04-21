let a="A";
function check_lowercase(a){
  let lower="qwertyuiopasdfghjklzxcvbnm";
  for(let i=0;i<lower.length;i++){
    if(a==lower[i]){ 
   // console.log(a,"is lowercase");
      return true;
    }
  }
}
let result=check_lowercase(a);
  if(result==true){
   console.log(a,"is lowercase"); 
  }
  else{
   console.log(a,"is uppercase"); 
  }
   
 

