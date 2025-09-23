


let myName = "Hannah";
let greeting = `Hi! My name is ${myName}.`;

console.log(greeting);
//returns “Hi! My name is Hannah."

myName = "Alex";

console.log(greeting);
//returns “Hi! My name is Alex.”

const string = "Strings are awesome!";
console.log(string.length);
console.log(string.indexOf("some"));

let substring = string.slice(12, 19);

console.log(substring); //returns “awesome”

const string1 = "Pine";
const string2 = "apple";

console.log(string1.concat(string2)); 
console.log(string1+string2);
console.log("".concat(string1, string2));

let myArray = ["hi", ","," ","my"," ", "name", " ", "is", " ", "hannah","."];
console.log("".concat(...myArray));

console.log ("Hi," + " " + "my" + " " + "name" + " " + "is" + " " + "Hannah" + " " + "and" + " " + "I" + " " + "am" + " " + 29 + " " + "years" + "8 " + "old.")


Math.floor(42.8405); //returns 42

Math.ceil(42.8405); //returns 43

Math.round(42.8405); //returns 43

function getRandomInt(min, max) {
	const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() *  (maxFloor - minCeil) + minCeil);	
};

console.log(getRandomInt (0,529.45395));
