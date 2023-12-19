//1) Map()
const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);


//2) Chainning in JS
let Chainning= numbers
               .map((value)=> value=value+1 )
                .filter((value)=> value >=4 );

console.log(Chainning);
