
function UserDetails(username, age, salary) {
    this.username =username;
    this.age =age;
    this.salary =salary;
    
    return this;
}

//Added a increment-function in above UserDetails prototype
UserDetails.prototype.increment = function(){
    this.age++;
    console.log(this.age);
}

let user1 = new UserDetails("Ammar",22,10000)
let user2 = new UserDetails("Rafeh",24,20000)

console.log(user1);
console.log(user2);

//calling that function which is added in prototype
user1.increment()
user2.increment()