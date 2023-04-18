let arr=["goku","gohan","gon","luffy","google","google","nami"];

//how many words are starting with letter g

let count=0;
for(i=0; i<arr.length; i++){
  if(arr[i][0]=="g"){
    ++count;
  }
}
console.log(count);