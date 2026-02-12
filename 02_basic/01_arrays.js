//array intro

const myArr = [0, 1, 2, 3, 4]
const myHeroes = new Array(1, 2, 3)
//in js arrays are resizeable , can contain heterogenous datatypes , NOT associative(array elements cant be accessed using arbitraty strings), 
//can be accessed using indexes starting from 0

console.log(myArr[0])
//in array copy operation is in Shallow copy creating way(access/call by reference)

//METHODS IN ARRAY
myArr.push(6, true)           //can push multiple

myArr.pop()   //pops last element
console.log(myArr)

myArr.unshift(9)   ///adds at beginning
console.log(myArr)


myArr.shift()   //removes lst element

console.log(myArr.includes(8))   //returns boolean
console.log(myArr.indexOf(7))   ///-1 if NOT present

const newArr = myArr.join()
console.log(newArr)     // ans:  0,1,2,3,4,6    (string datatype)

//SLICE
console.log("A ", myArr);   //A  [ 0, 1, 2, 3, 4, 6 ]
const myn1 = myArr.slice(1, 4)
console.log(myn1)          //[ 1, 2, 3 ]
console.log("B ", myArr)   //B  [ 0, 1, 2, 3, 4, 6 ]

const myn2 = myArr.splice(1, 4)
console.log(myn2)         //[ 1, 2, 3, 4 ]
c.onsole.log("C ", myArr)  //C  [ 0, 6 ]






