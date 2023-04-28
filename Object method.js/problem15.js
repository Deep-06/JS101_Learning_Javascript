let a1=["Rice", "Dal", "Salt"];
let a2= [2, 3, 1];
let a3=[60, 50, 20];

let data=[];
for(i=0;i<a1.length;i++){
  let obj={};
  obj.name=a1[i],
  obj.quantity=a2[i],
  obj.price=a3[i]
data.push(obj);
}
//console.log(data);
let obj={
  data:data,
  total:function(){
    let sum=0;
    for(let i=0;i<data.length;i++){
      sum+=this.data[i].quantity*this.data[i].price; 
    }
   console.log(sum);
  }
}
obj.total();
  
  
  //console.log(total);

  



