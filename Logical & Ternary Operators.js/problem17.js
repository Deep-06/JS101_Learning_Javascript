let a="deep";
let b="anu";
let c="deep";

if((a===b) && (b===c)){
  console.log("All the name are same");
}
else if(a===b){
  console.log("a,b are same");
}
else if(b===c){
  console.log("b,c are same");
}
else if(a===c){
  console.log("a,c are same");
}
else {
  console.log("All the name are different");
}