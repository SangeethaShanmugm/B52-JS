const age = 20
const batch = "B52WD"
const mark = 90
// const student = {
//     name: "Deepak",
//     age: age,
//     batch: batch
// }

// console.log(student)

//object shorthand
//=> both key and value name is same 

const student = {
    name: "Deepak",
    age,
    batch,
    score: mark,
}

console.log(student)



function printData(student) {
    return student.name + " has got " + student.score + " and he belongs to " + student.batch
}

console.log(printData(student))

//destruture

function printData1(student) {
    const { name, score, batch } = student
    return name + " has got " + score + " and he belongs to " + batch
}

console.log(printData1(student))

//destruturing in argument itself
function printData2({ name, score, batch }) {
    return name + " has got " + score + " and he belongs to " + batch
}

console.log(printData2(student))

//template literals
function printData3({ name, score, batch }) {
    return `${name} has got ${score} and he belongs to ${batch}`
}

console.log(printData3(student))

//arrow function
const printData4 = ({ name, score, batch }) => {
    return `${name} has got ${score} and he belongs to ${batch}`
}

console.log(printData4(student))


//arrow function + destruturing + template literals
const printData5 = ({ name, score, batch }) => `${name} has got ${score} and he belongs to ${batch}`

console.log(printData5(student))