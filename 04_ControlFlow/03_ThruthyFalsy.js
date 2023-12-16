// 1)Thruthy Falsy Values

// let userEmail = "ammar@email.com"
// if (userEmail) 
// {
//     console.log("Thanks for proving email, we will keep you updated!");
// } else
// {
//     console.log("Please enter a valid email");
// }


// 2)Checking/Validating empty Objects and Arrays

//a-Array

let userData = [];

if (userData.length === 0)
 {
  console.log("Its empty Array"); 
 } else {
  console.log("All good (array)");     
}

//b-Object

let AdminManagerData = {};

// console.log(Object.keys(AdminManagerData));
// console.log(Object.keys(AdminManagerData).length);

if (Object.keys(AdminManagerData).length ===0)
 {
  console.log("Its empty object"); 
 } else {
  console.log("All good (object)");     
}
 



