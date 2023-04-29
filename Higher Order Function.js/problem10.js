// output-["Nrupul Dev", "Prateek Shukla", "Yogesh Bhat"]

let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let x=users.map(function(a,b){
  return (a.firstName+" "+a.lastName);
})
console.log(x);