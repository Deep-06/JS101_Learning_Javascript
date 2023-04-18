
//spread operator - it just copy the array.

let class_room=["luffy","zoro","nami","sanji"];

let class_room_2=["goku","deep"];

let class_room_3=["anu","ashu"];

let class_room_4=[...class_room, ...class_room_2, ...class_room_3];

console.log(class_room_4);


// if we push the whole classroom it will create another array within array.