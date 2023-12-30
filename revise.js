// console.log("lets go");

// let a = "12 ";
// let b = String(a);

// console.log(`Datatype:${typeof b}  Value:${b}`);

// console.log("2"+"3"+1+4+2);

// console.log(null>0);  //false
// console.log(null==0);  //false
// console.log(null>=0); //true blc comparison operators treats null as zero

// let num1 =5;
// let num2 = num1;

//  num2 = num2-2;
// console.log(num2);
// console.log(num1);

// let array1 = [1,2,3,4];
// let array2 =array1;

// console.log(array1);
// console.log(array2);

// array2.splice(0,2)
// console.log(array2);
// console.log(array1);

// let obj1 = {
//     name: "Ammar",
//     age:21
// };

// let obj2 =obj1;

// // console.log(obj1);
// // console.log(obj2);

// obj2.name ="rafeh";
// obj2.age =24;

// console.log(obj2);
// console.log(obj1);

// let myObject = {
//     "User Full Name":"Ammar Atiq",
//     age:21,
//     uni:"uoh"
// }

// const objectDestructure = {"User Full Name":name } = myObject;
// console.log(name);

// function myFunction(obj) {
//     console.log(obj);
// }

// myFunction( [1,2,2] )

// let myarr1= {name:"ammar"}
// let myarr2={ age:21}

// let arr3= {...myarr1, ...myarr2};
// console.log(arr3);

// let totalPrice = 0;
// function CalculatingTotalPrice (...items)
// {
//     console.log(items);
//     totalPrice= items.reduce((sum,price)=> sum +price ,0)
// }

// CalculatingTotalPrice(1,2,3);
// console.log(totalPrice);

// spread vs rest operator
// ...

// let arr1= [1,2,3,4];
// let arr2= [5,6,7,8];

// let arr3= [...arr1, ...arr2];
// console.log(arr3);

// let totalPrice = 0;
//  function CalculatingTotalPrice(...prices)
//  {

//     console.log(prices);
//     prices.reduce((sum,price)=>{
//         // console.log(sum);
//             return totalPrice = sum+price;
//     },totalPrice)

//  }
// CalculatingTotalPrice(100,200,600,793,132);
// console.log(totalPrice);

// let naam = "Ammar";

// // let myarr = [ naam,1];
// // console.log(myarr);

// let myObj = { Name : naam}
// console.log(myObj.consoleName);

// // var MeraVariable;
// console.log(MeraVariable);

// let MeraVariable = "Ammar";

// console.log(this);

// let myObj = {
//     name:"Ammar",
//     age:23,
//     Class:"BSCS-5thA",
//     greeting: function () {
//         console.log(`Hi my Name is ${this.name} and I am a Student of ${myObj.Class}`);
//     }
// }

// console.log(myObj.greeting());

// myObj.name = "Rafeh";
// myObj.Class = "MS-CS 2nd A";
// console.log(myObj.greeting());

// let database =10;

// (function DatabaseMessage() {

//     console.log(database,"Database connection is established successfully!");
// }) ();

// let myarr = [];
// // console.log(myarr.length);

// function checking(){
//     if (myarr.length===0) {
//         console.log("Array is empty");
//     }
// }

// checking()

// let myObj = { };

// function checking() 
// {
// //   console.log(Object.keys(myObj));

//   if (Object.keys(myObj).length === 0)
//   {
//     console.log("obj is empty");
//   } 
//   else 
//   {
//     console.log("obj not empty");
//   }
// }
// checking();


// let month ="jan";
// switch (month) {
//   case "jan":
//     console.log(1);
//     break;

//     case "feb":
//     console.log(2);
//     break;


//     case "march":
//     console.log(3);
//     break;

//     case "april":
//     console.log(4);
//     break;

//   default:
//     console.log("none");
//     break;
// }


// let value = 1 ?? 2;

// let value2 = null ?? undefined ??6;

// let val3 = null ?? 2 ??10 ;


// let val4 = 56 ?? undefined ;


// console.log(val4);


// let val1 =5;
// let val2 =10;


// val1 <= val2 ? console.log("ok") : console.log("not ok");

// console.log(1);
// console.log(2);

// setTimeout(() => {
// console.log(3);
    
// }, 2000);

// console.log(4);

// fetch("https://api.github.com/users/MuhammadAmmarAtique")
// .then((response)=>{
//   return response.json();
// })
// .then((data)=>{
//         console.log(data.name);
// })

// console.log(5);





