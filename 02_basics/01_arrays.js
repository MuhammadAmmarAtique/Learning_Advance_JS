//arrrays

let arr1 = ["mama","papa"];
let arr2 = ['rafeh',`ammar`,"moiz"];

// arr1.push(arr2);
// console.log(arr1[2]);


// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//Merging arrays using spread operator
//spread operator 
// (ya opearotor dono arrays ko spread karaay ga aur phir haam isko join kardeingy aik new array mai)

let arr3= [...arr1 , ...arr2];
console.log(arr3);