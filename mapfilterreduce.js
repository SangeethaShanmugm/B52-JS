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