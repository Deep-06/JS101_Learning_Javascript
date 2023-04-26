let obj={
  data:[
    {name: "iphone", price:80000, color:"red"},
    {name: "oneplus", price:60000, color:"blue"},
    {name: "redmi", price:50000, color:"yellow"},
  ],
  high_price:function(){
    let max=-Infinity;
   for(let i=0;i<this.data.length;i++){
     for(let key in this.data[i]){
       if(key=="price" && this.data[i]["price"]>max){
         max=this.data[i]["price"];
         name_max=this.data[i]["name"];
       }
     }
   }
    console.log(name_max,max);
  }
}
//product,max----> iphone,80000
obj.high_price();