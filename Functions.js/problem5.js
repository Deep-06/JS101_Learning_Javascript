//check even or odd

function check_even_odd(a){
  if(a%2==0){
    console.log("even",a);
  }else{
    console.log("odd",a);
  }
}
// check_even_odd(6);
// check_even_odd(3);
// check_even_odd(5);
// check_even_odd(7);

for(let i=1;i<=10;i++){
  check_even_odd(i);
}