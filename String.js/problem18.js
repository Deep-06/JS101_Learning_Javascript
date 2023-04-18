let str="abbrce"
let count=0;
for(let i=0; i<5; i++){
  if(str[i]=="a"||str[i]=="i"||str[i]=="e"||str[i]=="o"||str[i]=="u"){
    count++;
  }
}
if(count>Math.floor(5/2)){
  console.log("true")
}
else{
  console.log("false")
}