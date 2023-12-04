// 03) Datatype conversions using functions like Number(), String(), Boolean()
// node 01_basics/03_conversionOperation

// 1)Converting to number(part-a)

let score = "22abc";  
let valueInNumber = Number(score); //converting string into number
// console.log(typeof(valueInNumber)); //it will give wrong/unexpected result
// console.log(valueInNumber); //so do this.


// 2)Converting to number(part-b)

//Replacing above score value with null,undefined,true,false
let num = false;  
let value = Number(num); 
// console.log(typeof(value)); 
// console.log(value); 

// Hence we learned that converting following things into number gave us following results
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// 3)Converting to Boolean

let isLoggedIn = 0;  //replace it with "" empty string also
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

 // "hitesh" => true
 // "" => false
 // 1 => true; 0 => false

// 4)Converting to String

 let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

//////////////////////////////////OPEARATIONS dURING STRING TO NUMBER////////////////////////////////////////////////
                              //  "or" NUMBER TO STRING CONVERSIONS 


let newvalue = 3
let negValue = -newvalue
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);


// Whenever we add string with number, string is always given priority
let a=1;
let b=2;
let c="3";
let d=a+b+c;
console.log(d);

let e=2;
console.log(e+d);  

// These type of question may be asked in mcqs, interview but in roduction they are useless.