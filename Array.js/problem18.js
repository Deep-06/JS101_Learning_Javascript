let array=[-100,2,-70,3,-30]

//min value=-70;
//max value=3;

//min value should be a positive value bcoz cannot take negative values.
//max value should be highest negative value 

let min=+Infinity //it gives highest value in JS

let max=-Infinity //it gives lowest value in JS

for(let i=0; i<array.length; i++){
  if(array[i]<min){
    min=array[i];
  }
  if(array[i]>max){
    max=array[i];
  }
}console.log("min",min,"max",max);
