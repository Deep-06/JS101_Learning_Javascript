let flipkart=[
  {type:"monitor",brand:"msi",price:600},  {type:"camera",brand:"canon",price:6005},
  {type:"toy",brand:"msi",price:500},
  {type:"printer",brand:"hp",price:60000},
  {type:"monitor",brand:"hp",price:6500}
]

let query="monitor";
for(let i=0;i<flipkart.length;i++){
  if(flipkart[i].type==query)
console.log(flipkart[i]);
}
}