//SINGLETON & CONSTRUCTOR STUFF
const tinderUser = new Object()   //this is singleton object
console.log(tinderUser)    // {} ----> this result is same as const tinderUser = {}   THE ONLY DIFFERENCE IS HERE THE EMPTY OBJECT WOULD BE NON-SINGLETON
tinderUser.id = "123abc"
tinderUser.name = "yash"
tinderUser.age = 21
console.log(tinderUser)   //{ id: '123abc', name: 'yash', age: 21 }

//OBJECTS INSIDE OBJECTS

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userName: {
            firstName: "yagya",
            lastName: "prash"

        }
    }
}

console.log(regularUser.fullname)  //{ userName: { firstName: 'yagya', lastName: 'prash' } }
console.log(regularUser.fullname.userName.lastName) //prash
/*concept of : OPTIONAL CHAINING
console.log(regularUser.fullname?.userName.lastName)
*/

//object merging
const obj1 = {
    1: "a", 2: "b"
}
const obj2 = { 3: "c", 4: "d" }
/*
const obj3 = { obj1, obj2 }
console.log(obj3)  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
*/
const obj3 = Object.assign({}, obj1, obj2)     //here syntax is Object.assign(target , source...)  ---> thus , keep target an empty object which further is returned to obj3
console.log(obj3)   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//m2 using spread
const obj4 = { ...obj1, ...obj2 }
console.log(obj4)    //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



//# When data comes from database it's usually in array of objects
const user = [
    {
        id: 1,
        name: "ya"
    },
    {
        id: 2,
        age: 21
    }
]

//users[1] ---->this accessing gives object and now all methods of objects we can apply on it (very similar to STL nesting in cpp)
console.log(user[1].age)   //21



//SOME MORE OBJECT METHODS

console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'age' ]    array datatype   V.V IMP FACT
console.log(typeof Object.keys(tinderUser))  //object --->basically array

console.log(Object.values(tinderUser))   //[ '123abc', 'yash', 21 ]


console.log(Object.entries(tinderUser))   //[ [ 'id', '123abc' ], [ 'name', 'yash' ], [ 'age', 21 ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'))    //false   --->returns boolean if such key exists


//VVVIMP OBSERVATION
/*
console.log(Object.length(tinderUser))  ----->JS throws an error because length is not a method of the global Object.
*/
//correct way is :
console.log(Object.keys(tinderUser).length)//3  // Object.keys(tinderUser) → returns an array and arrays have .length






//************************************DESTRUCTURING********************************

const course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "Tushita"
}
//to avoid redundancy we use this method accessing:-
const { courseInstructor } = course
console.log(courseInstructor)    //Tushita

//to change name
const { courseInstructor: abc } = course
console.log(abc)     //Tushita




//**********API******************** */

//values come from backend and it comes in JSON
//json looks like object only
//it has both key & values in string
/*{
    name: "abc",
        coursename: "js in hindi",

}
        */

//sometimes we get api in array of objects format

//LEARN JSON FORMATTER















