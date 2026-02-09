//declaration ways
const score = 123.8999

const balance = new Number(123.678)

console.log(balance.toString); //converts to string

console.log(balance.toString.length)

console.log(balance.toFixed(2))   //returns value in string----->123.68

const hundreds = 10000000

console.log(hundreds.toLocaleString())  //1,00,00,000 in amaerican way

console.log(hundreds.toLocaleString('en-IN'))//1,00,00,000 in indian way


//***************MATHEMATICS***************************** */

console.log(Math);

console.log(Math.abs(-4 * 2))
console.log(Math.round(8.7));
console.log(Math.ceil(6.8))
console.log(Math.floor(5.8))
console.log(Math.pow(2, 3))  //8
console.log(Math.max(1, 2, 3, 33, 433))  //433
console.log(Math.min(1, 2, 3, 33, 7666))  //1

console.log(Math.random())  //always geenrate a number randomly between 0 and 1 and mostly decimal

//so what if we want a random generator for a dice game
console.log((Math.random() * 6) + 1);  //+1 to avoid 0  OR console.log(Math.floor(Math.random() * 6) + 1);

//lets Develop a code to geenrate number strictly between limits
const mini = 10
const maxi = 20

const ans = Math.floor(Math.random() * (maxi - mini + 1)) + mini  //vvimp

console.log(ans)










