//let arr=["luffy","goku","sanji"];

//output-->["yfful","ukog","ijnas"]

let obj={
array:["luffy","goku","sanji"],
reversearray:function (){
  let newarr=[];
  for(let i=0;i<this.array.length;i++){
    let reverse="";
    for(let j=this.array[i].length;j>=0;j--){
    reverse+=this.array.push[i][j]; 
      //adding each character into reverse string
    }
    newarr.push(reverse); //pushing thr reversed string into array
  }
  console.log(newarr);
}  
}
obj.reversearray();