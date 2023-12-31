//new keyword

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
