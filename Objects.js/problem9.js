let details={
  Name:"Deepshikha",
  father_name:"Manoj kumar",
  mother_name:"sandhya",
  Address:"hajipur",
  Age:25,
  pin_code:844101,
  married:false
};

//only for objects --> for..in loop

for(let a in details){
  
 // console.log(a); // print all the keys
  
  //only one way to print the value
  //console.log(details[a]); //it will print all the values inside the object

console.log(a+":"+details[a]); //it will print both key and value
}