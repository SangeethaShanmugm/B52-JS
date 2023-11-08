let firstName = "Harishri"
let lastName = "Dharmaraj"


let sayHi = {
    firstName: "Richard",
    lastName: "Raja",
    welcome: function () {
        console.log(`say hi to ${firstName} ${lastName}`)
        return `say hi to ${this.firstName} ${this.lastName}`
    }
}

console.log(sayHi.welcome())
