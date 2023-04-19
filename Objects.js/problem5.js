let details={
  Name:"Deepshikha",
  father_name:"Manoj kumar",
  mother_name:"sandhya",
  Address:"hajipur",
  Age:25,
  pin_code:844101,
  married:false
};

//Update the present data

details.married=true; //dot notation
details["Address"]="bangalore"; //bracket notation
console.log(details);

// no syntax differtence between adding and updating but we cannot add the things with same keyname 
// keys inside the object will be unique.
//if key is present we can only update the data if not present then new key and value will be added.