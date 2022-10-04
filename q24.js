var nationality = "Pakistani";
var age = 30;
var names = ["Muhammad","Hassan"];

// string
console.log(nationality === "Dubai"); // false
console.log(nationality === "Pakistani"); // true
console.log(nationality === "pakistani"); // false
console.log(nationality.toLowerCase() === "pakistani"); // true

// number
console.log(age === 30); // true
console.log(age === 40); // false
console.log(age > 40); // false
console.log(age < 40); // true
console.log(age >= 30); // true
console.log(age <= 30); // true

// "and" and "or"
console.log(nationality === "Pakistani" && age > 20); // true
console.log(nationality === "Pakistani" && age > 50); // false

console.log(names.includes("Muhammad")); // true
console.log(names.includes("Hassan")); // false