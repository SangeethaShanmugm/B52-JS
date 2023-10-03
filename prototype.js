
//constructor function
function Student(name, batch) {
    this.name = name
    this.batch = batch
}

//creating object 
const s1 = new Student("badrinath", "b52")


console.log(s1.name)
// console.log(s2.name)

//adding properties
//syntax => constructorfunctionName.prototype.property/Key = "value"
Student.prototype.gender = "male"

Student.prototype.age = 20


Student.prototype.welcome = function () {
    console.log(`Hello I am ${this.name}`)
}

Student.prototype = { age: 40 }

const s2 = new Student("harishri", "b52")


console.log(Student.prototype)
console.log(s1.gender)
console.log(s2.gender)
s1.welcome()
// s2.welcome()
console.log(`Name: ${s1.name} => ${s1.age}`)
console.log(`Name: ${s2.name} => ${s2.age}`)
