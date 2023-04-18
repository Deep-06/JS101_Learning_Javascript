let a=[1,2,3,-1,-2,-3];
//replace all the positive element elements to 1 and all the positive element to 0.
// output--[1,1,1,0,0,0]

for(let i=0; i<a.length; i++){
  if(a[i]>0){
    console.log(a[i]=1);
  }
  else if(a[i]<0){
    console.log(a[i]=0);
  }
}