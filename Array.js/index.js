
// let num=10;
// let i=1;
// while(i<=num){
//   console.log(i%10);
//   i++
// }

// let a=1;
// let num=17;
// while(a<num){
//   if(a%2==1){
//     console.log(a);
//   }
//   a++;
// }

let arr=[10,42,13,13]
let flag=false;
for(let i=0;i<arr.length;i++){
  if(arr[i]==42){
    flag=true
  }
  else{
    flag=false
  }
}
if(flag==true){
  console.log("yes")
}
else{
  console.log("no")
}