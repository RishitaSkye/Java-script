//singleton
//Object.create

//object literals
const mysym = Symbol("key1")

const jsUser={
    name: "Rishita",
    "full name":"Rishita Das",
    [mysym]: "mykey1",  //to refer symbol..we have to use [] brackets
    age: 22,
    location: "Kolkata",
    email: 'rishitadas@gmail.com',
    isLoggedin: false,
    lastloginDays: ['Monday','Wednesday']
}
//print
console.log(jsUser)
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser.location)
console.log([mysym])
console.log(typeof jsUser[mysym])  //string


jsUser.email ="rishitadas@chatgpt.com"
//Object.freeze(jsUser)  //to freeze object

jsUser.email ="rishitadas@google.com"

console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
    console.log('Hello Js User, ${this.name}');
}
console.log(jsUser.greetingTwo());
