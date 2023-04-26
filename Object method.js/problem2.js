let form={
  details:(name,age)=> {
    console.log(name);
    console.log(age);
  }
}
// dot notation
form.details("deep",22); 

//bracket notation
form["details"]("deep",22); 