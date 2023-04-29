// banglore-["Nrupul Dev", "Prateek Shukla"]

let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let x=users.filter(function(a,b){
  if(a.place=="Banglore"){
    return a;
  }
  }).map(function(a){
  return (a.firstName+" "+a.lastName);
  })
console.log(x);