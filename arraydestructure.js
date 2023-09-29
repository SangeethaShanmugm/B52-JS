//arraydestructure => extract an array values into new variables

const profile = ["Ismail", "keerthana", "prudhvi", "shankar"]

//["Ismail", "keerthana", "prudhvi", "shankar"]
//   0          1            2         3      => index | position

console.log(profile)// ['Ismail', 'keerthana', 'prudhvi', 'shankar']

console.log(profile[3])
console.log(profile[1])


//array destructure
//const userDetails = ["Mohammed", "Ismail", "ismail@gmail.com"]

// console.log(userDetails)//['Mohammed', 'Ismail', 'ismail@gmail.com']

//const [firstName, lastName, emailId] = userDetails

// console.log(firstName)
// console.log(emailId)


//const [firstName, lastName, emailId] = ["Mohammed", "Ismail", "ismail@gmail.com"]

// console.log(firstName, emailId)
// console.log(emailId)

//adding extra value 

const [firstName, lastName, emailId, newname = "sankar"] = ["Mohammed", "Ismail", "ismail@gmail.com", "john"]

console.log(firstName, emailId)
console.log(emailId)
console.log("newname", newname)//sankar
