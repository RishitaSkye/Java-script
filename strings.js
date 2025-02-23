const name="Rishi"
const repocount =50

//console.log(name + repocount + "Das");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);
const gameName =new String('rishita')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newstring = gameName.substring(0,4)
console.log(newstring);
const anotherString =gameName.slice(-8,4)
console.log(anotherString);
const newstringone="   Rishi   "
console.log(newstringone);
console.log(newstringone.trim());   //trim

const url ="https://rishi.com/hitesh%20choudhury"
console.log(url.replace('%20','-4')) //this means '%20' is replaced by "-4" 
console.log(url.includes('rishi')) //for checking that 'rishi' is present/includes or not in url
console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));


