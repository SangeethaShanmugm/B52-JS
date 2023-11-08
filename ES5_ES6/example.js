
let letVar = 3;
// TDZ starts at beginning of scope
var func = () => console.log(letVar); // OK

// Within the TDZ letVar access throws `ReferenceError`
func()
// End of TDZ (for letVar)
// Called outside TDZ!






// function sum(a, b) {
//     return a + b
// }
// console.log(sum(10, 20))