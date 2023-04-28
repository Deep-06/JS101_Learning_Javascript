//Create an object with the following functionality
// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total

let arr=[
  {
    name:"goku",
    age:22,
    marks: {
    english:50,
    maths:40,
    physics:60
    }
  },
  {
    name:"deep",
    age:21,
    marks: {
    english:80,
    maths:90,
    physics:80
    }
  },
  {
    name:"luffy",
    age:24,
    marks: {
    english:70,
    maths:60,
    physics:80
  }
  }
  
  ];

let obj={
  arr:arr,
  sum: function (){
   arr1=[];
    for(let i=0;i<arr.length;i++){
   let sum=(this.arr[i].marks.english+this.arr[i].marks.maths+this.arr[i].marks.physics);
    arr1.push(sum);
    }
    return arr1;
  },
   
  least_total: function(){
   let x=obj.sum();
    let min=+Infinity;
    for(let j=0;j<x.length;j++){
    if(arr1[j]<min){
      min=arr1[j];
    }  
    }
    console.log(min);
  },
  
  highest_total: function(){
     let x=obj.sum();
    let max=-Infinity;
    for(let j=0;j<x.length;j++){
    if(arr1[j]>max){
      max=arr1[j];
    }  
    }
    console.log(max);
  }
} 
obj.least_total();
obj.highest_total();
