// singleton 
// object.create() // constructor

// object literals
const JsUser  = {
    name: "Abhishek",
    "full name": "Abhishek Sunil Ghodke",
    age: 27,
    location: "Pune",
    email: "abhighodke3@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["full name"]);

// How to declare and access Symbol data type

// Object.freeze(JsUser) // It will restrict overriding values in the object

JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

