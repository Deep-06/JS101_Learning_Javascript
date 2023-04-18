//for loop using continue
// for(i=10; i>=1; --i){
//     if(i%2!=0){
//       continue;
//     }
//   console.log(i);
// }

//while loop
let i=10;
//while(i>=1){
//   if(i%2==0){
//     console.log(i);
//   }
//   --i;
// }

//using continue

while(i>=1){
  if(i%2==1){
  i--;
  continue;
}
console.log(i);
  i--;
}