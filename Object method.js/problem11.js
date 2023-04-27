let obj={
  name:"goku",
  age:22,
  place:"delhi",
  marks: {
    english:10,
    maths:10,
    physics:10
  },
// print the obj
submit:function () {
 console.log("name",this.name);
  console.log("age",this.age);
  console.log("place",this.place);
  console.log(this.marks.english);
  console.log(this.marks.maths);
    console.log(this.marks.physics); 
},
//value empty
reset:function (){
this.name="";
  this.age="";
  this.place="";
  this.marks.english="";
  this.marks.maths="";
  this.marks.physics="";

   console.log("name",this.name);
  console.log("age",this.age);
  console.log(this.place);
  console.log(this.marks.english);
  console.log(this.marks.maths);
    console.log(this.marks.physics);
},

//total of three subjects
total:function (){
  console.log(this.marks.english+this.marks.maths+this.marks.physics);
}
}

//obj.submit();
obj.reset();
//obj.total();
