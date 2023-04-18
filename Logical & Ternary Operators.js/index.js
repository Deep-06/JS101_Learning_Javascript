let x=10;
let y=8;

if(x%2==0 && y%2==0){
  console.log("both are divisible by 2");
}
else if(x%5==0 && y%2==0){
  console.log("remainder as 0");
}
else {
  console.log("nothing");
}

let hour=12;
let weekend=true;

if(hour>10 && hour<18 || weekend){
  console.log('office closed');
}
else {
  console.log("office not closed");
}

console.log(!true && !true &&true &&! false);
console.log((true && true) || (false || false));
console.log((true && false)&& (true || false));

let day="wednesday";
let time="11:30";
  
  if(day=="sunday"||time=="11:30"){
    console.log("revisit");
  }
else if(day=="saturday" && time=="11:30"){
  console.log("psc class");
}
else {
 console.log("js session");

