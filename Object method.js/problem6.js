//write a function to print every element inside the array.
//write function inside object

let obj={
  array: ["luffy","zoro","deep"],

  print: function(){
    for(let i=0;i<this.array.length;i++){
     console.log(this.array[i]);  
    }
   
  }
}
obj.print();