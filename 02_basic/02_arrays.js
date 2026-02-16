//some more stuffs
const marvel_heroes = ["thor", "ironman", "Spiderman"]
const dc_heroes = ["Batman", "superman"]

/*marvel_heroes.push(dc_heroes)  //it has a problem see below result
console.log(marvel_heroes)    //[ 'thor', 'ironman', 'Spiderman', [ 'Batman', 'superman' ] ]     here no of elements = 4

console.log(marvel_heroes[3][0])   //Batman

marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes)     //[ 'thor', 'ironman', 'Spiderman', [ 'Batman', 'superman' ]  ----> it creates a new array without changing older two
*/

const all_Heroes = marvel_heroes.concat(dc_heroes)
console.log(all_Heroes)      //[ 'thor', 'ironman', 'Spiderman', 'Batman', 'superman' ]

//another method using SPREAD
const new_all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(new_all_heroes)    //[ 'thor', 'ironman', 'Spiderman', 'Batman', 'superman' ]


//USE OF FLAT METHOD
const another_Array = [1, 2, [2, 34], [2, 3, [5, 6]], 6]
const real_Array = another_Array.flat(Infinity)  //here we can depth of flatness we want...since we want all and in easy way so we chose infinity
console.log(real_Array)   //[1,2,2,34,2,3,5,6]


//
console.log(Array.isArray("Hitesh"))   //false
console.log(Array.from("Hitesh"))  // ['H','i','t','e','s','h']
//IMP CASE
console.log(Array.from({ name: "Yagya" }))
// []  ---->gives empty array as it doesnt know which one to convert to array , key or value or both 

//convert multiples variables/set of elements to array
let score1 = 100
let score2 = 200
score3 = 300
console.log(Array.of(score1, score2, score3))   // [100,200,300]



