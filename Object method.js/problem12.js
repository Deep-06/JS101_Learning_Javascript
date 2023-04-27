let arr=[1,2,3,4,5,6];

let divisible= (a,b) => {
    if(a%b===0){
      return true;
    }
    else{
      return false;
    }
  }
function print(arr,n){
  for(i=0;i<arr.length;i++){
    if(divisible(arr[i],n)===true){
      console.log(arr[i]);
    }
  }
}

print(arr,3);


