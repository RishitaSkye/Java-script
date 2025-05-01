// for of
//["", "", ""]
//[{}, {}, {}]

const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
console.log();
console.log();


const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}
console.log();
console.log();

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('In', "India")
console.log(map);

console.log();

for (const [key, value] of map) {
    console.log(key, ':-', value);   
}
 console.log();

 const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
 }

//  for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }