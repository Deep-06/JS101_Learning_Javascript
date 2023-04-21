let a=[4,3,6,2,5];
let ans=[];
for(var i=0;i<a.length;i++){
  let sum=0;
  for(var j=a.length-1;j>=0;j--){
    sum=i+j;
    ans[i]=a[sum];
  }
}
console.log(ans);