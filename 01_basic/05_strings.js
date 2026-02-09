const name = "Yagya"
const number = 72

console.log(name + number);  //NOT A GOOD SYNTAX OLD HOGYA HAI
//USE BACKTICKS WHICH ALLOW STRING INTERPOLATION I.E. WE MAKE PLACE HOLDERS AND INJECT IN THAT OUR STRING

console.log(`hello my name is ${name} and my roll is ${number}`); //modern way //we can use toupeercase



const gamename = new String(`Yagya123`)  //another way to declare strings in a new way also it is in key:value pair(index is key and character is value)
console.log(gamename)

console.log(gamename[0])
console.log(gamename.__proto__)   //returns empty object


console.log(gamename.length);

console.log(gamename.__proto__.length) //retuns 0 because Prototypes → ❌ don’t store data, they store methods
//basically,  String.prototype —> a shared object that stores methods for all string
//A prototype is an internal object that JavaScript uses to share methods and properties between objects via the prototype chain.

// __proto__ V.S. prototype


console.log(gamename.toUpperCase());
console.log(gamename.charAt(2))
console.log(gamename.indexOf('a'));   //ig first occurence btata hai


const newString = gamename.substring(0, 4)  //Yagy


const anotherString = gamename.slice(-7, 4)   //agy
console.log(anotherString);

const newStringOne = "   hello   "
console.log(newStringOne.trim())   //removes all spaces unwanted wale

//we also have trimStart()  and trimEnd()

const url = "myname@gmail.somm"
console.log(url.replace('somm', 'com'))

console.log(url.includes('bhai'));  //returns false

const stringTest = "yagya-parasar-jha"
console.log(stringTest.split('-'))   // [ 'yagya', 'parasar', 'jha' ]
















