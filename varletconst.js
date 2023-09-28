// var => we can redeclare and reassign ✅
// let => we cannot redeclare but can reassign  ✅
// const  => we cannot redeclare nor reassign


var a = 10
var a  //declaration 
a = 10 //assignment

//redeclare
var a = 10
var a = 11
console.log(a)//11

//reassign
var a = 10
a = 11
console.log(a)//11

//let 
//redeclare ❌

// let b = 10
// let b = 20
// console.log(b)//Uncaught SyntaxError: Identifier 'b' has already been declared

//reassign ✅
let b = 10
b = 20
console.log(b)//20


//redeclare

// const c = 10
// const c = 20
// console.log(c)//Uncaught SyntaxError: Identifier 'c' has already been declared

//reassign

const c = 10
c = 20
console.log(c)//Uncaught TypeError: Assignment to constant variable.