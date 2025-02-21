// primitive

//7types: string, number, boolean, null(empty), undefined, symbol, BigInt

const score =100  //number defined
const scoreValue =100.3

const isLoggedIn=false
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);

//const bigNumber=23154796532145698412356445n


//Reference(Non primitive)

// Array, Objects, Functions

const heros =["shaktiman","nagraj","doga"]  // Arrays in []
// Objects are in {} 
let myObj = {
    name: "rishi",
    age: 22,
}

const myfunction =function(){ //for store in variable "const" is used
    console.log("Hello world");
}

console.log(typeof (bigNumber));
console.log(typeof (outsideTemp));
console.log(typeof (scoreValue));

// https://262.ecma-international.org/5.1/#sec-11.4.3
