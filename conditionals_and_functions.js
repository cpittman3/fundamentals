/*
 * Conditionals, Functions, Scope and Loops.
 */

//CONDITIONALS

//Equals
// = is used for assigning values
// == compares values without regard for type
// === compares values with type being considered
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let LessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

//CONDITIONALS AND FUNCTIONS

let storeA = 1.40;
let storeB = 3.40;

// A function allows you to set values, calculate which conditions are being met and return
// the appropriate response without having to repeatedly write it's corresponding code block
function compareStorePrices (storeA,storeB) {
    let storeAIsLower = storeA < storeB;
    // Set a condition and a response
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
        // Alternate condition and response if the previous condition is not met
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
        // Default response if no previous conditions are met
    } else {
        console.log("Their prices are equal.")
    }
}
// Call Function
compareStorePrices(10,5);
compareStorePrices(7,10)

// A function used for a value
function squareNum (number){
    let squared = number * number;
    return squared;
}
// Function call placed in a variable so it can be displayed
let squaredNumber = squareNum(10)
console.log(squaredNumber)

//SCOPE
// Global scope
let x = 10;

// Function scope
// Variables declared within a function are local to the function and can not be accessed outside of it
// Local variables will override global variables when the function in which they are contained is called
function addNumbers (n,m,x) {
    console.log(x);
    let b;
    // Block scope
    // Variables declared in lower scopes can't be accessed by higher scopes
    // Variables declared in higher scopes can still be used
    if(1===1){
        b = 8;
    }
    console.log(b);
    return n + m;
}
// Example of variable override
addNumbers(2,3,8);
// Check global var x is un-effected
console.log(x);

//ARRAYS AND LOOPS

//              0,1,2,3,4,6,7  Indices start at zero
let ourArray = [1,2,3,4,5,6,7];

// Store the array length in a variable
let arrLen = ourArray.length;

// A for loop has the format of: Set the starting value of the controlling variable
// Set the condition it must meet to stop the loop from repeating
// Manipulate the controlling variable in a way that will satisfy the loops condition
for(let i = 0; i < arrLen; i++){
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    // A nested loop runs until it's condition is met each time it's parent repeats
    // Should only be used as a last resort
    for(let j = 0; j < 10; j++){
        console.log('j is equal to: ' + j);
    }
}

// let x = 0;
// while ( x < 10){
//    console.log('Ran');
//    x = x + 1;
