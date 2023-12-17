// For loop

// 1)Nested loop
for (let i = 1; i <= 5; i++) {
    
    for (let j = 1; j <= 5; j++) {
        console.log("*")
    }
    
}

// 25 aestrick will be printed

for (let i = 1; i <= 5; i++) {
    
    console.log(`outer loop ${i}`);

    for (let j = 1; j <= 5; j++) {
       
    console.log(`                       inner loop ${j}`);   
    }
    
}
// How its working ? 
// bahir wala aik baar chalaay ga phir andar wala 5 baar, it will continue like this.


//2) Printing Tables using Nested loop

for (let i = 1; i <= 10; i++) {
    

    for (let j = 1; j <= 11; j++) {
    
        if (j==11) {
            console.log("")
            break;
        }
        console.log(`${i}×${j} is: ${i*j}`);
    
    
    } 
}


//3)Using "break" and "continue" keywords in for loop


for (let i = 1; i < 21; i++) {
    
    if (i==5) {
        console.log(`${i} is my best number, i get it now exit from loop`);
        break;
    }
    console.log(i);
    
}