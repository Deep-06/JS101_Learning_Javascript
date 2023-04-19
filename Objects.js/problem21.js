let s1={
  name:"deep",age:20,location:"delhi"
}

let s2={ name:"ashu",age:16,location:"patna"
}

let s3={  name:"anu",age:21,location:"bangalore"
}

//write in a single array
let student=[
{
name:"deep",age:20,location:"delhi"
},
  { name:"ashu",age:16,location:"patna"
},
  {  name:"anu",age:21,location:"bangalore"
}
]

console.log(student[0].name);

for(let i=0;i<student.length;++i){
if(student[i].name=="deep"){
  console.log(student[i]);
}
}