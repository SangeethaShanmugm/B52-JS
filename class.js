// // class=> blueprint of the object

// // class => car




// //   bmw       RR      Merc(object)


// // properties | key | prototype

// // brandname
// // color
// // speedLimit


// class House {
//     constructor() {
//         this.brandname = "bmw"
//         this.color = "red"
//     }
// }
// //creating an object 

// const h1 = new House()

// console.log(h1)


class House1 {
    //defining the properties
    constructor(brandname, color) {
        this.brandname = brandname
        this.color = color
    }
}
//creating an object 

const h2 = new House1("bmw", "red")
const h3 = new House1("rr", "white")
console.log(h2)
console.log(h3)


// //this keyword => access property of an object


// let firstName = "Harishri"
// let lastName = "Dharmaraj"


// let sayHi = {
//     firstName: "Richard",
//     lastName: "Raja",
//     welcome: function () {
//         console.log(`say hi to ${firstName} ${lastName}`)
//         return `say hi to ${this.firstName} ${this.lastName}`
//     }
// }

// console.log(sayHi.welcome())


class Car {
    constructor(carname, speedlimit) {
        this.carname = carname
        this.speedlimit = speedlimit
    }

    //define method
    welcome() {
        console.log(`Hey my car name is ${this.carname} and its speed limit is ${this.speedlimit}`)
    }

}

let car1 = new Car("VW", "250km/hr")
let car2 = new Car("Bmw", "300km/hr")

console.log(car1)
// console.log(car1.carname)
// car1.welcome()

// car2.welcome()




// let cap = {
//     name: "Jack",
//     sayHi: function () {
//         console.log("Hello", this.name)
//         const iAm = () => {
//             console.log("World", this.name)
//         }
//         iAm()
//     }
// }

// cap.sayHi()



// const myObject = {
//     name: "Jack",
//     welcome: abc = () => {
//         console.log(`My name is ${this.name}`)
//     }
// }

// myObject.welcome()



// sayhi()
// console.log(a)
// let a = 5
// function sayhi() {
//     console.log("hello")
// }



//getter and setter

// getter => get value of an Object
// setter => set value of an Object


class Student {
    constructor(name) {
        this.name = name
    }

    get studentName() {
        return this.name
    }

    set studentName(n1) {
        this.name = n1
    }
}

let Student1 = new Student("Jack")
console.log(Student1.name)

//change value for name property

Student1.studentName = "John";
console.log(Student1.name)