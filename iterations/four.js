const myObject={
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    py: "python",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
 console.log(programming[key]);
 
}
// MAPS

// const map = new Map()
// map.set('In', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('In', "India")
// console.log(map);

// console.log();

// for (const [key, value] of map) {
//     console.log(key, ':-', value);   
// }
//  console.log();
