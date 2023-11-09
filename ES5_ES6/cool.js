//import { double, msg, greet } from "./object.js"//named import
import double from "./object.js"//default import
import msg from "./msg.js"
console.log(double(10))//fcuntion call

console.log(msg())
console.log(greet)
//2 types
//1. named import and export (prefered)
//2. default import and export

//commonJS => ES5 || module => ES6