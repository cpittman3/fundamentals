/*
 * Objects, Interfaces, and API's
 */
// Objects contain data and/or functionality that is related
let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    // A function within an object is called through it's key
    bark: function(){
        console.log("Bark!");
    }
};
// A key containing a function must use parenthesis
dog.bark();

// Passing by value
function x(y) {
    y.num = y.num + 5;
    console.log(y);
}
// Passing by reference
let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);