/*
=================================================
Assignment 21: Scope and Hoisting Prediction
Topic: JavaScript Scope and Hoisting
=================================================

Instructions:
1. Read each code snippet carefully.
2. Predict the output before running the code.
3. Understand the difference between var, let and const.
4. Observe how hoisting works in JavaScript.

*/

// -------------------------------------------------
// Q1. var and Block Scope
// Concept: var is not block-scoped.
// Question: What will be the output?
// Expected Output: 20
// -------------------------------------------------

console.log("Q1: var and Block Scope");

var a = 10;

if (true) {
    var a = 20;
}

console.log(a);


// -------------------------------------------------
// Q2. let and Block Scope
// Concept: let is block-scoped.
// Question: What will be the output?
// Expected Output: 5
// -------------------------------------------------

console.log("Q2: let and Block Scope");

let x = 5;

{
    let x = 15;
}

console.log(x);


// -------------------------------------------------
// Q3. Temporal Dead Zone (TDZ)
// Concept: let cannot be accessed before declaration.
// Question: What error will occur?
// Expected Output: ReferenceError
// -------------------------------------------------

console.log("Q3: Temporal Dead Zone");

// console.log(a);
// let a = 50;


// -------------------------------------------------
// Q4. Hoisting with var
// Concept: var declarations are hoisted and initialized
// with undefined.
// Question: What will be the output?
// Expected Output: undefined
// -------------------------------------------------

console.log("Q4: Hoisting with var");

console.log(b);
var b = 100;


// -------------------------------------------------
// Q5. const and Block Scope
// Concept: const is also block-scoped.
// Question: What error will occur?
// Expected Output: ReferenceError
// -------------------------------------------------

console.log("Q5: const and Block Scope");

{
    const num = 25;
}

// console.log(num);


// -------------------------------------------------
// Q6. Function Declaration Hoisting
// Concept: Function declarations can be called
// before their definition.
// Question: What will be the output?
// Expected Output: Hello JavaScript
// -------------------------------------------------

console.log("Q6: Function Declaration Hoisting");

sayHello();

function sayHello() {
    console.log("Hello JavaScript");
}


// -------------------------------------------------
// Q7. Function Scope
// Concept: Variables declared inside a function
// are local to that function.
// Question: What will be the output?
// Expected Output: 50, then 10
// -------------------------------------------------

console.log("Q7: Function Scope");

var value = 10;

function test() {
    var value = 50;
    console.log(value);
}

test();
console.log(value);


// -------------------------------------------------
// Q8. Local and Global Scope
// Concept: A function can have its own local variable.
// Question: What will be the output?
// Expected Output: 200, then 100
// -------------------------------------------------

console.log("Q8: Local and Global Scope");

let number = 100;

function show() {
    let number = 200;
    console.log(number);
}

show();
console.log(number);


// -------------------------------------------------
// Q9. Function Expression Hoisting
// Concept: var declaration is hoisted, but its function
// assignment is not.
// Question: What error will occur?
// Expected Output: TypeError
// -------------------------------------------------

console.log("Q9: Function Expression Hoisting");

// sayHelloAgain();

var sayHelloAgain = function () {
    console.log("Hello");
};


// -------------------------------------------------
// End of Assignment 21
// Topics Covered:
// 1. Global Scope
// 2. Block Scope
// 3. Function Scope
// 4. var, let and const
// 5. Hoisting
// 6. Temporal Dead Zone
// 7. Function Declaration
// 8. Function Expression
// -------------------------------------------------