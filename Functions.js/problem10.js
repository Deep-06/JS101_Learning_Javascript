
let a="B";
function check_lowercase(a){
  let lower="qwertyuiopasdfghjklzxcvbnm";
  for(let i=0;i<lower.length;i++){
    if(a==lower[i]){
      return true;
      //if we use return here then the output will not be true as e is not equal to q and the compiler come to line 11 and return false part. so, if we are using return here we cannot use else part.
     // console.log(a,"is lowercase");
    }
    else{
      return console.log(a,"is uppercase");
      //break;
    }
  }
}
check_lowercase(a);