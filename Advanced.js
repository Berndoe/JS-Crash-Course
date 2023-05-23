// Nested functions

let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();

// With closures returning the inner function leads to persistent memory
// It also returns the scope of the function


// Function currying
// It is collecting multiple arguments one at a time
function sum(a,b,c) {
    return a + b + c;
}

function currying(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum = currying(sum)
console.log(curriedSum(1)(2)(3));

// the code on line 34 and 35 can be rewritten like this as well
const add2 = curriedSum(2)
const add3 = add2(2)
const add5 = add3(8)
console.log(add5); // this adds 2,2 and 8 together

// this keyword. Ways of determining this

// Implicit binding
const person = {
    name:'Ben',
    sayMyName: function() {
        console.log(`My name is ${this.name}`);
    }
}
person.sayMyName(); // the object to the left of the dot notation is what 'this' is referring to
// Explicit binding
function mentionMe() {
    console.log(`My name is ${this.name}`);
}
// every function has a method called call that invokes it with a specified this value and arguments provided individually
mentionMe.call(person); // the argument passed is what 'this' is referring to


// New binding (basically creating a new object)
function Person(name) {
    this.name = name;
}

const p1 = new Person("Kay");
const p2 = new Person("Jay");
console.log(this); // when a function is invoked this way, this will always create an empty object

// globalThis.name = "bree" // how to declare a global variable 
// Default binding (this refers to the global scope)
mentionMe(); // will be undefined since there is no global variable name

// Order of precedence new > explicit > implict > default


//  Prototype (adding methods or properties to a constructor that is available to all instances created from the constructor)
function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new Person("Bernd", "O");
const person2 = new Person("John", "T");

// this function is unique to person1 and cannot be used by anyone else
person1.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
console.log(person1.getFullName());
0
// we use the prototype to give access to all instances of the object
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
console.log(person2.getFullName()); // this would print the name


// Prototypal inheritance

SuperHero.prototype = Object.create(Person.prototype); // inheriting Person methods through prototype chain
SuperHero.prototype.constructor = SuperHero; // done to make sure that javascript knows that superhero isnt created from the Person constructor

function SuperHero(fName, lName) {
    Person.call(this, fName, lName); // 'this' in person will now refer to this in superhero
    this.isSuperHero = true;

}
SuperHero.prototype.fightCrime = function() {
    return 'Fighting Crime';
}

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.getFullName());

console.log(batman.fightCrime());

// Classes
class People {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    sayName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const classP1 = new People("Gina", "K")
console.log(classP1.sayName());

// inheritance through classes
class Hero extends People {
    constructor(fName, lName) {
        super(fName, lName)   
        this.isSuperHero = true;
    }
    fightingCrime() {
        console.log("I fight crime");
    }

}
const flash = new Hero("Barry", "Allen");
console.log(flash.sayName());
flash.fightingCrime();

// Iterables and iterators 
const obj = {
    [Symbol.iterator]: function() {
        let step = 0;
        const iterator = {
            next: function() { 
                step++;
                if (step == 1) {
                    return {value:"Hello", done:false}
                }
                else if(step == 2) {
                    return {value:"World", done:false}
                    
                }
                return {value: undefined, done:true} // value is for current value and done is a boolean to show if there are more elements after that value
            }
        }
        return iterator;
    }
}

// the code above is an implementation of how the loops work
for (const word of obj) {
    console.log(word);
}

function normalFunction() {
    console.log("Hello");
    console.log("World");
    
}

// Generators (simplify the task of writing iterators)
function* generatorFunction() {
    yield "It";
    yield "Works";
}

const generatorObject = generatorFunction();
for (const word of generatorObject) {
    console.log(word);
}