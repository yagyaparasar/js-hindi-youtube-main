
//******************************LECTURE : 19 FUNCTIONS 01 *******************************************************/



//in simple words :Function is Whatever code we have written , it is wrapped in a package and that package can be moved/accessed/used anywhere as many times as we want

console.log("Y");
console.log("A");
console.log("G");


function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("G");


}


sayMyName()  //sayMyName --->ye hogya reference of function   and sayMyName()---->execution of function


//function to add 2 numbers 

function adder(number1, number2) {      //number1,number2 are parameters
    console.log(number1 + number2)

}

adder(34, 56)   //90                    //here 34,56 are arguments
adder(3 + "4")   //34undefined
adder(2 + "a")    //2aundefined
adder(5 + null)   //NaN
adder("b" + 4)    //b4undefined
adder("a" + "b")    //abundefined




const result = adder(3, 4)
console.log(result)        //undefined  WHY?  ---->HERE FUNCTION IS PRINTING NOT RETURNING VALUES OF SUM


function realAdder(num1, num2) {
    let result = num1 + num2
    return result

    console.log("yo");  //unreachable code 

}


function realAdder2(num1, num2) {
    return num1 + num2
}

const abx = realAdder(3, 7) + realAdder2(-7, 34)

console.log("result of abx:", abx)   //37
console.log(realAdder(4, 7))    //11

function loginUser(username) {
    return `${username} just logged in`
}

console.log(loginUser("yagya1971"))

console.log(loginUser())  //undefined just logged in



//use of if block
function loginUserNew(username) {
    if (username === undefined) {     // or if(!username){}
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserNew())    /*please enter a username
                                  undefined*/

//another use of if block
//"" or undefined ---> false



//use of default value 
function loginUserNews(username = "yagya") {
    if (username === undefined) {
        console.log("please enter a username");    //----->this becomes useless as in no argument it prints yagya
        return
    }

    return `${username} just logged in`
}





//******************************LECTURE : 20 FUNCTIONS 02 *******************************************************/

//Shopping cart :here we dont know know many items user will add...we just have to add their prices irrespective of number of arguments/items
//rest and spread operator
function calculateCartPrice(...num1) {     //use of rest operator here 
    return num1
}

console.log(calculateCartPrice(1, 2, 3, 4, 5, 6, 78, 8))    //we get array --> [1,2,3,4,5,6,78,8]


//VVI INTERVIEW QUESTION

function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice2(1, 2, 4, 5, 6))   //[ 4, 5, 6 ]  --->since 1,2 goes in val1 and val2 and we return only num1



//OBJECT IN FUNCTIONS


const user = {
    name: "yagya",
    price: 195
}

function handleObject(anyobject) {
    console.log(`The name is ${anyobject.name} and price is ${anyobject.price}`);

}

handleObject(user)   //The name is yagya and price is 195


handleObject({
    name: "yash",                  //we can directly pass object too : The name is yash and price is 123
    price: 123
})




//ARRAY IN FUNCTION

const newArray = [1, 2, 3, 4, 5]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray))   //2

console.log(returnSecondValue([1, 21, 3, 4, 5, 3]))   //21

