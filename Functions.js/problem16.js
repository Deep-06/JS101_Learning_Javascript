let arr=[1,2,3];
function arr_str(a){
  let bag="";
  for(let i=0;i<a.length;i++){
    bag+=a[i];
  }
  //console.log(bag);
  return bag;
}
let result=arr_str(arr);
console.log(result);
