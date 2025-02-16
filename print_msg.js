// Function to print a message
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Loop to greet multiple people
const names = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
    greet(names[i]);
}

// Example of using Arrow Function
const square = (num) => num * num;
console.log("Square of 5:", square(5));