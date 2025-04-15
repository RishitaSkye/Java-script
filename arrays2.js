const marvel_heros=["Thor", "Spiderman", "Ironman"]
const dc_heros=["superman", "batman", "flash"]

marvel_heros.push(dc_heros)  // to add

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros)  // to add (alternate method)
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


const all_new_Heros = [...marvel_heros, ...dc_heros]
console.log(all_new_Heros);

const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= anotherArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Rishiita"));
console.log(Array.from("Rishiita"));
console.log(Array.from({name: "Rishiita"}))

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))

