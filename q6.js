function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
function ltrim(stringToTrim) {
	return stringToTrim.replace(/^\s+/,"");
}
function rtrim(stringToTrim) {
	return stringToTrim.replace(/\s+$/,"");
}

// example of using trim, ltrim, and rtrim
var myString = "\tAlbert Einstein\n"
console.log("*"+trim(myString)+"*");
console.log("*"+ltrim(myString)+"*");
console.log("*"+rtrim(myString)+"*");

