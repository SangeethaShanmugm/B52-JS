var farm = ["🐷", "🐮", "🐴", "🐐", "🐔"]


const {
    animalName,
    type,
    amount,
    country = ["india", "africa"],
    count = 200,
} = {
    animalName: "🐯",
    type: "Wild Animal",
    amount: "2L",
    count: 500,
}

console.log(animalName)//"🐯"
console.log(type)//"Wild Animal"
console.log(country)//["india", "africa"]
console.log(count)


//array destruturing 

var farm = ["🐷", "🐮", "🐴", "🐐", "🐔"]
//["🐷", "🐮", "🐴", "🐐", "🐔"]
//    0     1    2      3      4 

// const pig = farm[0]
// const cow = farm[1]
// const hen = farm[4]

// console.log(pig, cow, hen)
//array destruturing 

// const [pig, cow, hen] = farm
// console.log(pig, cow, hen)

//2nd way 

// let pig, cow, hen;

// [pig, cow, hen] = ["🐷", "🐮", "🐔"]
// console.log(pig, cow, hen)//🐷 🐮 🐔

//3rd way 

let [pig, cow, hen] = ["🐷", "🐮", "🐔"];

console.log(pig, cow, hen)// 🐷 🐮 🐔

//function definition
function double(n) { //named export
    return n * 2
}


function msg() {
    return "hello"
}

var greet = "welcome"

export { double, msg, greet }