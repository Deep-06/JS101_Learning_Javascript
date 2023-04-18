let str="school";
let bag="";


for(var i=(str.length-1); i>=0; --i){

  for(var i=(str.length/2)-1; i>=0; --i){
    bag=bag+str[i];
  }
  for(var i=(str.length-1); i>=str.length/2; --i)
  {
    bag=bag+str[i];
  }
}
console.log(bag);