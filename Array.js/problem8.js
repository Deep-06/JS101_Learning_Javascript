let a= [1,-1,-2,-3,6,0];
 //replace -ve no. with 0
//[1,0,0,0,6,0]

for(let i=0;i<a.length;++i){
  
  if (a[i]<0){
    a[i]=0;
  }
}
console.log(a);
