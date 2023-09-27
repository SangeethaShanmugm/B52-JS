//ES5
// function definition/function declaration
function sum(a, b) { //parameter
    return a + b
}
//           arguments
console.log(sum(5, 10))//function calling


// //ES6 => arrow function => compact way of using function 

var sum = (a, b) => a + b;

console.log(sum(5, 10))

//anonymous function => when function is used as a value

let x = function () {
    console.log("Hello")
}

x()


    // function () {
    //     console.log("Hello")
    // }


    //IIFE function => Immediately invoked function expression

    // (function functionName() {
    //     return //function logic
    // })()


    // function welcome() {
    //     return "Hello Everyone🥳🥳🥳"
    // }

    // console.log(welcome())



    (function welcome() {
        console.log("Hello Everyone🥳🥳🥳")
    })();

// console.log(welcome())

//avoid global namespace
//closure => ES5 & ES6
//async & await