//A class
// class Bug {
//     constructor(name, phrase, power) {
//         this.name = name
//         this.phrase = phrase
//         this.power = power
//         this.species = "bug"
//     }
//     hide = () => console.log("You can't catch me now!")
//     sayPhrase = () => console.log(this.phrase)
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }

// //B class
// class Robot {
//     constructor(name, phrase, power) {
//         this.name = name
//         this.phrase = phrase
//         this.power = power
//         this.species = "robot"
//     }
//     transform = () => console.log("Optimus prime!")
//     sayPhrase = () => console.log(this.phrase)
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }

// // const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 10)
// // const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 15)

// console.log(bug1.power) //output: 10
// Robot1.attack() // output: "I'm attacking with a power of 15!"



// class Enemy {
//     constructor(power) {
//         this.power = power
//     }

//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }

// //extends => inherit property from Enemy class(Parent)
// class Alien extends Enemy {
//     constructor(name, phrase, power) {
//         super(power)
//         this.name = name
//         this.phrase = phrase
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     sayPhrase = () => console.log(this.phrase)
// }


// // const alien1 = new Alien("Ali", "I'm Ali the alien!", 10)
// // const alien2 = new Alien("Lien", "Run for your lives!", 15)

// // alien1.attack() // output: I'm attacking with a power of 10!
// // console.log(alien2.power) // output: 15
// // alien2.attack()





class Character {
    constructor(speed) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    // attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log(`Its a different attack`)
}

class Bug extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}

// const enemy = new Enemy("Ali", "I'm Ali the alien!", 10, 50)

//object creation
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)


console.log(alien1.power)

console.log(bug1.speed)

bug1.hide()
// alien2.fly()
// alien1.hide()

console.log(alien1.species)
console.log(bug1.species)
alien1.attack()
alien2.attack()
console.log(bug1.species)
bug1.attack()

// console.log(enemy.attack())
// Encapsulation  = > when you want to secure properties and methods like you want to expose the properties to another class we use public and provide keywords to protect


//abstraction  => represent information that are relevant to problem statement || context

//polymorphism  => having same methods in parent and child. but referring to when we have a parent methods in child, the child method is going to override the parent methods