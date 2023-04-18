for(let i=1;i<=5;i++){
  let bag=""
  for(let j=1;j<=5;j++){
    if(i==1||i==5||i==j||j==1||j==5){
      bag+="*"+" "
    }
    else{
      bag+=" "+" "
    }
      
  }
  console.log(bag)
}