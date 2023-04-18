// Problem 1: Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
for(let month=1;month<=12;month++){
  if(month==2){
    d=28;
  }
  else if(month==4 || month==6 || month==9 || month==11){
    d=30;
  }
  else if(month==1 || month==3 || month==5 ||month==7 ||month==8 ||month==10 ||month==12){
    d=31;
  }
  for(let day=1;day<=d;day++){
    console.log(day+"-"+month);
  }
}