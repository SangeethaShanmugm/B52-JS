var city = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"]
//["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"]
//   0          1        2            3           4  => index => position  
console.log(city[3])//Chennai
console.log(city[4])//Hyderabad
console.log(city[0])//Delhi

console.log(city.indexOf("Bangalore"))//8
console.log(city.indexOf("Hyderabad"))//4

//push =>add at the end od an array

var city = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"]
console.log(city)
console.log(city.push("Kolkata"))
console.log(city)

console.log(city.push("Chandigarh"))
console.log(city)
console.log(city[4])

//pop => remove last element in an array

var city = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Chandigarh']

var output = city.pop()
console.log(output)

var output = city.pop()
console.log(output)
console.log(city)

//unshift => add an element in the start of an array

var city = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Chandigarh']

console.log(city.unshift("Dubai"))
console.log(city.unshift("Paris"))
console.log(city)


var train = ["🚃", "🚃", "🚃"]

console.log(train.unshift("🚂", "🔗"))//5
console.log(train)//['🚂', '🔗', '🚃', '🚃', '🚃']

//shift => remove element from start of an array

console.log(train.shift())//🚂
console.log(train) //['🔗', '🚃', '🚃', '🚃']

var farm = ["🐷", "🐮", "🐴", "🐐", "🐔"]

console.log(farm.shift())
console.log(farm)

console.log(farm.shift())
console.log(farm)


//slice => slice(startIndex,endIndex) 🍪 => 🍕 

var farm = ["🐷", "🐮", "🐴", "🐐", "🐔"]
//["🐷", "🐮", "🐴", "🐐", "🐔"]
//   0     1      2      3     4
//  -5    -4    -3      -2    -1


console.log(farm.slice(2))//['🐴', '🐐', '🐔']
console.log(farm.slice(0))// ['🐷', '🐮', '🐴', '🐐', '🐔']


console.log(farm.slice(2, 5)) //['🐴', '🐐', '🐔']
console.log(farm.slice(0, -2))//['🐷', '🐮', '🐴']
console.log(farm.slice(-2, -1))//['🐐']
console.log(farm.slice(-1, -2))//[]


var farm = ["🐷", "🐮", "🐴"]
//"🐷", "🐮", "🐴"
//  0     1      2
// -3     -2    -1
console.log(farm.slice(-1, -3))//[]
console.log(farm.slice(-1))
console.log(farm.slice(0, -1))

//splice => splice(startIndex, DeleteCount, values)


var city = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Chandigarh']

//['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Chandigarh']
//     0      1           2           3          4             5           6

console.log(city.splice(2, 2)) //['Bangalore', 'Chennai']
console.log(city) //['Delhi', 'Mumbai', 'Hyderabad', 'Kolkata', 'Chandigarh']

console.log(city.splice(3, 0, "Pune", "Paris")) //[]
console.log(city) //['Delhi', 'Mumbai', 'Hyderabad', 'Pune', 'Paris', 'Kolkata', 'Chandigarh']

console.log(city.splice(4, 0, "Innsburg", "France")) //[]
console.log(city)
//['Delhi', 'Mumbai', 'Hyderabad', 'Pune', 'Innsburg', 'France', 'Paris', 'Kolkata', 'Chandigarh']

console.log(city.splice(5, 2)) // ['France', 'Paris']
console.log(city)//['Delhi', 'Mumbai', 'Hyderabad', 'Pune', 'Innsburg', 'Kolkata', 'Chandigarh']

//['Delhi', 'Mumbai', 'Hyderabad', 'Pune', 'Innsburg', 'Kolkata', 'Chandigarh']
//   -7       -6           -5       -4       -3           -2           -1


console.log(city.splice(-5, 2, "Paris", "Madurai")) // 
console.log(city)
//['Delhi', 'Mumbai', 'Paris', 'Madurai', 'Innsburg', 'Kolkata', 'Chandigarh']

//reverse

var city = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Chandigarh']
var result = city.reverse()//✅

console.log(result)//['Chandigarh', 'Kolkata', 'Hyderabad', 'Chennai', 'Bangalore', 'Mumbai', 'Delhi']


var city = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Chandigarh']
var result = [...city].reverse()//❌

console.log(result)//['Chandigarh', 'Kolkata', 'Hyderabad', 'Chennai', 'Bangalore', 'Mumbai', 'Delhi']

var msg = ["Have", "a", "Good", "day", "😆"]
var result = msg.join("")
console.log(result)//Have/a/Good/day/😆

//split

var gitlink = "https://github.com/SangeethaShanmugm?tab=repositories"
console.log(gitlink.split(/[:.\=/_?]/))
//['https:', '', 'github', 'com', 'SangeethaShanmugm', 'tab', 'repositories']

// console.log(gitlink.replace(/JS/g, "-"));

//flat

var numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
var result = numbers.flat(0)

console.log(result)// [1, 2, 3, Array(4)]

var result = numbers.flat(1)

console.log(result)//[1, 2, 3, 4, 5, 6, Array(3)]


var result = numbers.flat(2)

console.log(result)//[1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = [...numbers]

console.log(result)