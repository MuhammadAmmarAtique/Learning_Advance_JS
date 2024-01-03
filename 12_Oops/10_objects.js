//More about JS Objects
// Object.getOwnPropertyDescriptor(ObjectName,"Objects Property/key Name")
//ya method kisi bhi object ki property ya key ki description laay kar ataa hai jo usually hamay nhi pta hotee

// 1)

let myObj = {
    name:"Ammar",
    age:22,
    Class:"BSCS 5thA"
}

// console.log(myObj);
// console.log(Object.getOwnPropertyDescriptor(myObj,"name"));

// OTHERS:-

// console.log(Object.getOwnPropertyDescriptors(myObj));
// console.log(Object.getOwnPropertyNames(myObj));
// console.log(Object.getOwnPropertySymbols(myObj));
// console.log(Object.getPrototypeOf(myObj));

// 2) Interview question ? (Can we change Math.pi value i.e 3.14 to 3)
// Answer: No b/c we can check that using same method Object.getOwnPropertyDescriptor( , )

// console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
// In result as we can see that its not writable so we cannot change it

//3) We can change our own defined object properties using  Object.defineProperty ( , , )

let user = {
    name: "Ali",
    age: 12,
    class : 7
}

// console.log(Object.getOwnPropertyDescriptor(user,"age"));

Object.defineProperty(user, "age", { value: 15, writable: false, enumerable: false})

// I change writable and enurable from true to false of "age" property
// 1) Hamm naay iski value change kar di
// 1) Ab iski value change nhi ho sakti keukaay ya writeable nhi ha
// 2) Ab iskay opar loop nhi chalay ga e.g for-in loop

// console.log(user.age);
// user.age = 20;
// console.log(user.age); //value not changing

for (const [key,value] of Object.entries(user)) {
    console.log(user[key]);  //age is not iterating
    
}