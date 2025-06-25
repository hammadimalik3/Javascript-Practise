// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const User = {
    name: "rohan",
    "full name": "rohan hammad",
    [mySym]: "mykey1",
    age: 1,
    email: "rohan@google.com",
    location: "rawalpindi",
    isLoggedIn: true,
    lastLoggedIn : ["Monday", "Friday"]

}

// console.log(User.email);
// console.log(User['email']);
// console.log(User['full name']);
// console.log(User[mySym]);
// User.email= "rohan@chat.com"
// Object.freeze(User)
// User.email= "rohan@whatsapp.com"
// console.log(User);

User.greeting = function(){
    console.log("Hello JS User");
    
}
 User.greeting2 = function(){
    console.log(`Hello User, ${this["full name"]}`);
    
}

console.log(User.greeting());
console.log(User.greeting2());





