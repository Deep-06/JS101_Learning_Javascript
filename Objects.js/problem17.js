//number of times each character appears
//{
// d-1
// e-2
// p-1;
// }
let str="deep";
let obj={};
for(let i=0;i<str.length;++i){
  if(obj[str[i]]==undefined){
    obj[str[i]]=1; //adding into the object
      }
  else{
    obj[str[i]]++;
  }
  }
console.log(obj);

