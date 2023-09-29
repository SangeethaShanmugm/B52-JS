//String literals || template literals

// An Avengers is an Action movie with rating of 5 and from the category Hollywood

var mname = "Avengers";
var type = "Action";
var category = "Hollywood";
var rating = 5

//es5

var result = "An " + mname + " is an " + type + " movie with rating of " + rating + " and from the category " + category + "."

console.log(result)

//es6
// backtick => ``
// ${} => interpolation => substitute the value
var result = `An ${mname} is an ${type} movie with rating of ${rating} and from the category ${category}`

console.log(result)
