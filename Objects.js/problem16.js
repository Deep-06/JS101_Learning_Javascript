let object={};
//add
object.name="Deep";
object.age=25;
object.phone="7693452589";
object.location="hajipur";
object.driving_licence=true;
object.breakfast=true;
console.log(object);
//update
object.phone="56863659067";
object.age=21;
object.driving_licence=false;
console.log(object);
//delete
delete object.driving_licence;
delete object.breakfast;

for(let a in object){
  console.log(a+":"+object[a]);
}
