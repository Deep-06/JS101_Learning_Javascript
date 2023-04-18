let n=5;
let names= ["chunnu","munnu","pablo","raju","shyam"];

let ispresent=false;
for(let i=0; i<n; i++){
  if(names[i]=="shyam"){
    ispresent =true;
  }
}
if(ispresent==true){
  console.log(true);
}else{
  console.log(false);
}