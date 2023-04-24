//Write a custom function that has the same behavior of inbuilt Array Includes Function
function includes(a){
  for(let i=0;i<array.length;i++){
    if(array[i]==a){
      return true;
    }
    else{
      return false;
    }
      
  }
}

let array=["cat","dog","gfgh"];
let x=includes("cat");
console.log(x);