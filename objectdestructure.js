//objectdestructure => extract an object values into new variables
//{K:V} => object 


// const profile = {
//     firstName: "Sankar",
//     lastName: "K S",
//     email: "sankar@gmail.com"
// }

// console.log(profile.firstName)
// console.log(profile.email)

//destrcuture
// const {
//     firstName,
//     lastName,
//     email,
//     smiley = ["🥳", "wealthy", "happy"],
//     power = "🚀"
// } = {
//     firstName: "Sankar",
//     lastName: "K S",
//     email: "sankar@gmail.com",
// }


// console.log(firstName)
// console.log(email)
// console.log(smiley)
// console.log(power)


// const person = {
//     name: "Ratan Tata",
//     networth: "💰💰💰💰",
//     house: "🏠",
//     phrase: "He loves India",
//     power: "🤖"
// }

// console.log(person)

const {
    name,
    networth,
    house,
    power = "⭐",
    skill = ["genius", "billionaire", "philanthroprist"]
}
    =
{
    name: "Ratan Tata",
    networth: "💰💰💰💰",
    house: "🏠",
    phrase: "He loves India",
    power: "🤖",
    skill: ["happy", "billionaire", "philanthroprist"]
}

console.log(networth, house, power, skill)//💰💰💰💰 🏠 🤖  ['genius', 'billionaire', 'philanthroprist']