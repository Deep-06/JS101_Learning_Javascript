function multiply(a,b){
  return a*b;
}
let result=multiply(1,2);

//check return value is even or odd.
function even_odd(result){
  if(result%2==0){
    console.log("even");
  }else{
    console.log("odd");
  }
}
even_odd(result);

//check return value is less than 2 or greater.
function less_than(result){
  if(result<2){
    console.log("less");
  }else{
    console.log("greater");
  }
}
less_than(result);