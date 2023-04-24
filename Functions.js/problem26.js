//Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function lastindexof(element){
  let arr="";
  for(let i=array.length-1;i>=0;--i){
    if(array[i]=="a"){
     arr+=i;
      break;
    }
    else if(i>=array.length){
      arr+="-1";
    }
  }
  return arr;
}

let array = ["a", "b", "a", "c", "a", "d"];
let element = "a";
let result=lastindexof(element);
console.log(result);