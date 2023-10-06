//map => transform the data || used  to iterate an array
//always return the same length of an array
//used to apply logics(add, sub,mul,div)


// var arr = [1, 2, 3, 4, 5]

// // function double(n) {
// //     return n * 2
// // }

// const output = arr.map((n) => n * 2)
// console.log(output)//[2, 4, 6, 8, 10]

var arr = [1, 2, 3, 4, 5]

var result = arr.map((item) => `<p>${item}</p>`)
console.log(result) //['<p>1</p>', '<p>2</p>', '<p>3</p>', '<p>4</p>', '<p>5</p>']

//binary number
var result = arr.map((x) => x.toString(2))
console.log(result) //[ '1', '10', '11', '100', '101' ]

//filter

//used to filter out the value
// it may or may not return the same length of output array as input array
//only return those data which output or condition is true


var arr = [1, 2, 3, 4, 5]

const output = arr.filter((x) => x > 4)

console.log(output)


var farm = ["🐷", "🐮", "🐴", "🐐", "🐔"]

const res = farm.filter((x) => x == "🐐")

console.log(res)


//reduce

var arr = [5, 1, 3, 2, 6]

//sum or max number 

function findSum(arr) {
    let sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

console.log(findSum(arr))

//reduce(callbackfunc(acc, curr), initalValue )

const out = arr.reduce(function (acc, curr) {
    acc = acc + curr
    return acc
}, 0)

console.log(out)


var arr = [5, 1, 3, 2, 6]

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax(arr))


var arr = [5, 1, 3, 2, 6]

const max = arr.reduce(function (max, curr) {
    // if (curr > max) {
    //     max = curr
    // }
    //single line if else condition=> terinary operator => condition ? if true : if false
    return (curr > max) ? curr : max
}, 0)

console.log(max)


//array of objects

const users = [
    { firstName: "Harishri", lastName: "Dharmaraj", age: 20 },
    { firstName: "Badrinath", lastName: "Nagarajan", age: 23 },
    { firstName: "Gali", lastName: "Ravi", age: 25 },
    { firstName: "Muthu", lastName: "Gowri", age: 20 }
]


//list of full name

const userData = users.map((usr) => usr.firstName + " " + usr.lastName)

console.log(userData)


// {20: 2, 23: 1, 25: 1}

const userData1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc

}, {})
console.log(userData1)


//map + filter 

const usersOutput = users.filter((usr) => usr.age > 20).map((usr) => usr.firstName)

console.log(usersOutput)