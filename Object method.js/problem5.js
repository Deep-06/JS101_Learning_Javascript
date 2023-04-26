//create a obj

let obj={
  length:3,
  breath:4,
  area: function (){
  console.log("area-",(this.length*this.breath));
  },
perimeter: function (){
  p=2*(this.length+this.breath);
  console.log("perimeter-",p);
}
}

obj.area();
obj.perimeter();