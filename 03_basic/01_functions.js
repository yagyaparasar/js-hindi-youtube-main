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







