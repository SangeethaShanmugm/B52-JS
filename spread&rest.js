// spread => used to copy , clone Array
// spread operator  => ...

//copy array
let arr1 = ["b", "y", "e"]

let arr2 = [...arr1]
console.log(arr1)//['b', 'y', 'e']
console.log(arr2)//['b', 'y', 'e']


//expand - 1
const a = ["Hi", "My", "name", "is", "Sangeetha"]

console.log(a)//['Hi', 'My', 'name', 'is', 'Sangeetha']
console.log(...a)//Hi My name is Sangeetha

console.log("Hi", "My", "name", "is", "Sangeetha") //Hi My name is Sangeetha


//expand - 2
let x = ["W", ..."XY", "Z"]
console.log(x)//["W","X","Y" "Z"]


let fruits = ["apple", "orange", "banana", "mango"]
let veg = ["tomato", "potato", ..."cabbage", ...fruits]

console.log(veg)//["tomato", "potato", "cabbage","apple", "orange", "banana", "mango" ]


// let colors = ["red", "green", "purple", "orange"]

// let addColor = colors //copy by reference => same address

// console.log(colors)//["red", "green", "purple", "orange"]
// console.log(addColor)//["red", "green", "purple", "orange"]

// addColor.push("pink")

// console.log(colors)//["red", "green", "purple", "orange","pink"]
// console.log(addColor)//["red", "green", "purple", "orange","pink"]


let colors = ["red", "green", "purple", "orange"]

let addColor = [...colors] //copy by value 

console.log(colors)
console.log(addColor)

addColor.push("pink")

console.log(colors)// ['red', 'green', 'purple', 'orange']
console.log(addColor)// ['red', 'green', 'purple', 'orange', 'pink']


//spread operator in object 

const o1 = { x: 1, y: 2 }
const o2 = { z: 3 }

const o3 = { ...o1, ...o2 }

console.log(o3)//{ x: 1, y: 2, z: 3 }

//Rest operator => when we use spread operator as a parameter in function

let r1 = function (...a) {
    console.log(a)
}

r1(1) //[1]
r1(4, 7, 8)// [4, 7, 8]
r1(10, 20, 30, 40, 50)//[10, 20, 30, 40, 50]



function add(a, b, c) {
    console.log(a + b + c)
}

const n1 = [1, 2, 3]

add(...n1)


function sample(a, b, ...c) {
    console.log(a)//Jack
    console.log(b)//John
    console.log(c)//['Peter', 'Mick', 'Anna']
}

sample("Jack", "John", "Peter", "Mick", "Anna")