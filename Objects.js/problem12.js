let array=["deep","ashu","goku","nami","luffy","deep"];
let object={};

for (let i=0;i<array.length;++i){
  if(object[array[i]]==undefined){
    object[array[i]]=1; //adding element to object
  }
  else{
    object[array[i]]++;
  }
}console.log(object);