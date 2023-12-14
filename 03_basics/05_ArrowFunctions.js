//1)Arrow function synatax

let greeting =()=>{
    console.log("hey world!");
}
// greeting();

//2)Explicit return (matlb jab haam return kw use kartaay hain)


let sum=(num1,num2)=>{
    return num1+num2;
}

console.log(`The sum is ${sum(2,21)}`);

//2)Implicit return (matlb jab haam return kw use nahi kartaay)


let substract=(num1,num2)=> (num1-num2)

console.log(`The difference is ${substract(21,2)}`);
