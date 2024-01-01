//Function as Object and "new" keyword
//In JS everything is a Object (e.g,Array,String,Function)

function UserDetails(username, age, salary) {
    this.username =username;
    this.age =age;
    this.salary =salary;
    
    return this;
}

//if we dont use "new" keyword here then previous one will be overwritten
let user1 = new UserDetails("Ammar",21,10000)
let user2 = new UserDetails("Rafeh",22,20000)

console.log(user1);
console.log(user2);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/