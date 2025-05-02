const coding=["js", "ruby", "pearl", "python", "java", "cpp", "c"]
coding.forEach( function (val) {
console.log(val);
})

console.log();

coding.forEach( (item) => {
    console.log(item);
})

console.log();

function printMe(item) {
    console.log(item);
    
}
coding.forEach(printMe);

console.log();

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);  
})

console.log();

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Cpp",
        languageFileName: "c++"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
    
})


