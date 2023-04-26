let details={
  name:"deep",
  age:22,
  address:"delhi",
  print: function (){
  //print:  () => {
     console.log(this.name);
    console.log(this.age);
    console.log(this.phn);
    }
}
details.print();

// Arrow function cann't work when we used this.name 
//this is a special keyword which is used only inside the object and it check all the keys which are matching after this word
//if it is matching value will be assigned to this.name
//if no key is matched it will give undefined 