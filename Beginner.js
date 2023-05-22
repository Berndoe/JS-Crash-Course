console.log(1) // this prints to the console

// this is a comment 

let age = 25 // using let allows you to update the variable value 

const salary = 800 // using const doesn't allow you to update the variable value 

// Strings
const name = "Ben"

// booleans
const isFresh = true
const isOld = false

let variable
console.log(variable); // this shows undefined but doesnt work for const

// instead we use null or set the value to undefined but in this case the value can never be updated
const variable1 = undefined
console.log(variable1);

// This is an object
const person = {
    'firstName':'Bernd',
    'lastName':'G',
    'age':30
}
console.log(person.firstName);

// arrays
let evenNumbers = [2,4,6]
console.log(evenNumbers[0]); // shows first element

// everything above has assignment operators

let x = 5
let y = 3

console.log(x > y);
console.log(x == y);
console.log(x >= y);
console.log(--x == ++y); // evaluates to true

// Conditionals
if(x > y) {
    console.log(x + " is greater than " + y);
}

color = 'grey'

switch(color) {
    case 'blue':
        console.log("Color is blue");
        break;
    case 'red':
        console.log("Color is red");
        break;
    default:
        console.log("It could be a color");
        break;
}

// Looping
for (let i = 1; i <= 5; i++) {
    console.log('Iteration Number ' + i);
    
}

let i = 1;
while (i <= 5) {
    console.log('Iteration Number ' + i);
    i++;
}

do {
    console.log('Iteration Number ' + i);
    i++;
} while (i <= 6);

let oddNumbers = [1, 3, 5, 7, 9]

for (const num of oddNumbers) {
    console.log('Iteration Number ' + num);

}

// functions
function greet() {
    console.log("hello");
}

function greet(username) {
    console.log("hello " + username);
    
}
greet('ben');

function add(a, b) {
    return a + b;
}

const result = add(5,5);

// Using arrow syntax 
const add = (a,b) => {
    return a + b;
}

// another way of writing arrow functions
const addNum = (a,b) => a + b;

const addition = add(1,2);
