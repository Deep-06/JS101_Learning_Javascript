let details={
  Name:"Deepshikha",
  father_name:"Manoj kumar",
  mother_name:"sandhya",
  Age:25,
  pin_code:844101,
  married:false,
  location: {
    city:"hajipur",
    state:"bihar",
    pin_code:844101,
    landmark:"near bus stand"
  }
}

console.log(details.location.state);
console.log(details["location"]["landmark"]);