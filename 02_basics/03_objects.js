//1)Making empty object and inserting key value pairs in it

let UserData = {};
console.log(UserData);

UserData.name="Ammar";
UserData["Full Name"]= "Muhammad Ammar Atique";
UserData.age = 22;
// console.log(UserData);

//2)Nesting of objects

let university={
    "IT Department":{
        Teachers:{
            "WE Teacher": "Madam Sonia"
        }
    }
}
// console.log(university["IT Department"].Teachers["WE Teacher"]);

//3)Merging two objects
let obj1={
    1:"head",
    2:"body",
    3:"hairs"     
}

let obj2={
    4:"eyes",
    5:"nose",
    6:"mouth"     
}

let obj3= { ...obj1, ...obj2 };
// console.log(obj3);

//4)An Array containing multiple objects


let myarray = [
    {
        name:"ammar",
        age:21
    },
    {
        name:"rafeh",
        age:212
    },
    {
        name:"maria",
        age:12
    }
]

//now getting all the keys and values from above array

console.log(Object.keys(myarray));
console.log(Object.values(myarray));  //these function will return an object