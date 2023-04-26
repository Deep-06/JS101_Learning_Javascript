let details={
  name:"deep",
  age:22,
  address:"delhi",
  //print function (){
  print:  () => {
     console.log("HI");
    }
}
details.print(); //way to call the function which is written inside the object.

    //it is an anonymous function here we cann't used normal function as we have already gave name print but arrow function  will work here but arrow function does not work eveytime there is exceptions.
   
  

// function print(){
//  console.log(details.name);
//  console.log(details.age);
// }
// print();