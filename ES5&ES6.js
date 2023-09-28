//scope => lifetime of a variable
//let, const  => block scope 
// {} => block
// console.log(y1)
var y2 = 20
{
    let y1 = 10
    var y2 = 20
}

console.log(y2)

//not defined(error) vs undefined

console.log("Hello")


//scope => global, local


// global scope

// var  => global scope

// Can a block hold a var or will it leak outside? => yes

const a = "Good Day🥳"

function welcome() {
    console.log(a)
}

console.log(a)
welcome()


let b = "Hello"

function greet() {
    b = "World🥳"
    // console.log(b)
}

console.log(b)

// greet()
// console.log(b)


// console.log(b)


// local scope

let c = "Hello"

function greet() {
    let d = "World🥳"
    console.log(c + d) //HelloWorld🥳
}

console.log(c)
// console.log(d)//Uncaught ReferenceError: d is not defined

greet()