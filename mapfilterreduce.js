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