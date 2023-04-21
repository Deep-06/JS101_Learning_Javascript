let arr=["masai", "school", "code", "bangalore"];
let sum=0;
for(let i=arr.length-2;i>=0;i--){
  sum=sum+arr[i].length;
}
console.log(sum);