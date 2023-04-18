let arr=[2,7,9,3,6,7]
let k=9
let count=0;
for(i=0;i<arr.length;i++){
  for(let j=i;j<arr.length;j++){
    if(arr[i]+arr[j]==k){
      count++
    }
  }
}
console.log(count)