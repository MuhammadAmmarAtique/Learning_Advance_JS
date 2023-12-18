//1) For-of loop
// Ya loop arrays aur strings par run hota hai, lakin jab haam iski suggestions letaay hain tooh kuch isaah dekhta hai
// for (const iterator of object) { }
//  is kaay andaar object mention hai ya object js wala object nahi hai, yahan par object ka matlb cheez hai maslaan
//  arrays ya strings aur "iterator" ki jagah element ya value kuch bhi likh sakhty hain


//a- Running For-of loop for array

let myHereos = ["Quaid-e-Azam","Allama Iqbal","Imran Khan"];

for (const elements of myHereos) {
    // console.log(elements);
}

//b- Running For-of loop for String

let LearningDeveloper = "Muhammad Ammar Atique";
for (const substring of LearningDeveloper) {
    // console.log(substring)
}