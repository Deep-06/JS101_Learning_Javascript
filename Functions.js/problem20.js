function absolute(a,b){
  difference=a-b;
  if(difference<0){
    difference=difference*-1;
  }
  return difference;
}

//difference of no.--->1,4

let x=absolute(1,4);
console.log(x);
