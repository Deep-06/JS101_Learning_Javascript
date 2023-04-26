//rest parameter --> 3 dot(...)
// it will convert all the arguments into array format and store to a variable.

let print=function(...a){
  //console.log(a);
  for(let i=0;i<a.length;i++){
    console.log(a[i]);
  }
}

print(1,2,3,5768,8765,32,78,345,57,2,"hi",7,true,false);