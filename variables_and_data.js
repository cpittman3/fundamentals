/*
 * Variables, Data Types, and Typing
 */

// VARIABLES
// Declare local variable
let wordData;
// Assign a value to the variable
wordData = "Word list";
// A variable can be assigned a value when being declared
// Example: let wordData = "Word list";

// Display contents of variable wordData
console.log(wordData);

// Examples of proper variable naming conventions
let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

// DATA TYPES
// Create an Object
let obj = {
    // Add keys and assign them a value
    key1: "value 1",
    key2: 3,
    // create and nest a new object with a key containing a value
    obj2: {
        obj2key1: "Value of inner object",
    },
};

// Display value of key1 of nested object
console.log(obj.obj2.obj2key1)

//TYPING
// Variable types are not needed in JS and are no longer supported
// JS is a weakly language and will attempt to solve expressions with conflicting types (string + number)
let var1 = "2";
let var2 = 5;
let result = var1 + var2;

// Display example of JS converting the number 5 to a string and adding it to the string value in var1
console.log(result)

//OPERATORS
// Examples of basic operators
let add = 1 + 2;
let sub = 2 - 1;
let multi = 2 * 4;
let division = 4 / 2;
let mod =  5 % 2;

// Combining strings
let string = "String 1 " + "String 2";

// Display combined strings
console.log(string);