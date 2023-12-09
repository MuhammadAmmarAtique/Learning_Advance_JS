// Stack vs Heap Memory
// node 01_basics/06_StackvsHeapMemory.js


// 1)Primitive datatypes are stored in stack memory
let number1 = 10;
let number2 = number1;

console.log(number1);
console.log(number2-1);


// 2)NP/ Reference Datatypes are stored in heap memory
let myArray1 = [1,2,3,4,5];
let myArray2 = myArray1;

myArray2.shift(1);
console.log(myArray2);
console.log(myArray1);



