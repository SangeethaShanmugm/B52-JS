// {
//     var a = 10;
//     let b = 20

// }
// console.log(a)
// console.log(b)

//scope => lifetime of a variable

//lexical scope  + hoisting

// var price = 1000

function getPrice() {
    console.log("The old price is ", price)
    let price = 500
    console.log("The new price is", price)
}

getPrice()



//hoisting

//JIT => Just In Time Compilation
//code => binary(byte code)

//phases
//1. compilation phase => console.log() => skip => look for only declaration
//2. execution phase => JS, context

//example> 1 => var 

//1. compilation phase
// console.log(a)//skip
// var a = 20 //JS =>Do you know a? No | what is the value? => context => undefined
// console.log(a)//skip

//2. execution phase
// console.log(a)//JS =>Do you know a? Yes | what is the value? => context =>undefined
// var a = 20 //JS =>Do you know a? Yes | what is the value? => context => a = 20
// console.log(a)//JS =>Do you know a? Yes | what is the value? => context => 20



//example> 2 => let

// //1. compilation phase
// console.log(a)//skip
// let a = 20 //JS =>Do you know a? No | what is the value? => context => dont initialize
// console.log(a)//skip

// //2. execution phase
console.log(a)//JS =>Do you know a? Yes | what is the value? => context => error =>Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 20
console.log(a)