let details={
  Name:"Deepshikha",
  father_name:"Manoj kumar",
  mother_name:"sandhya",
  Address:"hajipur",
  Age:25,
  pin_code:844101,
  married:false
};

//delete the key and value in object

delete details.married;
delete details["pin_code"];
console.log(details);