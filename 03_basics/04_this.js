//Using This keyword
let user = {
    username: "Ammar",
    age:21,
    PricePaid: 1299,

    greeting:function() {
        console.log(`Hey dear user your name is ${this.username},Your age is ${this.age} and you paid ${this.PricePaid} for our website registration`);
    }
}

user.greeting();

//New user comes in
user.username= "Rafeh";
user.age=24;
user.PricePaid= 1000;
user.greeting();


console.log(this); //output of this in node is empty object while in browser is browsers window object 