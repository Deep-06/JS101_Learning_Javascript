let a="masai school hi everyone"; //4 words
let space_count=0;


for(let i=0; i<a.length; i++){
  if(a[i]==" "){
    ++space_count;
  }
}
console.log("words=",space_count+1);