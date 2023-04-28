let arr=[1,2,3,4,5,7654,76,78,34676,344,5,9,13];
//1.filter even no.
//1.1 sort the even array from low to high and print last index value
let x= arr.filter(function(a){
  if(a%2===0){
    return a;
  }
}).sort(function(a,b){
  return a-b; 
})
console.log(x);
console.log("last index value- "+x[x.length-1]);
//2.filter odd no.
//2.1 sort odd array high to low and print 1st index value
let y= arr.filter(function(a){
  if(a%2!==0){
    return a;
  }
}).sort(function(a,b){
  return b-a;
})
console.log(y);
console.log("1st index value- "+y[0]);
//3. count even
let even_count=x.length;
console.log("even count",even_count);
//countodd
let odd_count=y.length;
console.log("odd count",odd_count);
//even >odd---even else odd
if(even_count>odd_count){
  console.log("even");
}
else if(even_count==odd_count){
  console.log("Both are same");
}
else{
  console.log("odd");
}

