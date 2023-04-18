let array=[1,2,3,4,5];
let b=[]; //empty array
//[5,4,3,2,1]-output

for(let i=array.length-1; i>=0; i--){
b.push(array[i]); //push elements into the empty array
}
console.log(b);