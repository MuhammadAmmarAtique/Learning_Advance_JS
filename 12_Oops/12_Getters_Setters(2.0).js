//old syntax (As in the behind the scene of "CLASS" syntax this is what going on)

function User(name, email) {
    this._name = name;
    this._email = email;
}

Object.defineProperty(User.prototype, 'name', {
    get: function() {
        return this._name.toUpperCase();
    },
    set: function(value) {
        this._name = value;
    }
});

let user1 = new User("Danish", "Danish@khan.com");
console.log(user1);
console.log(user1.name);
