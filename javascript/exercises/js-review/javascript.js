let greeting = document.querySelector('h1');
let button = document.querySelector('button');
let body = document.querySelector('body');

button.addEventListener('click', () => {
  
  if(greeting.textContent=='Hello, World'){
    greeting.textContent='Hi';
  } else greeting.textContent='Hello, World';
  
  if(body.style.backgroundColor=='red'){
    body.style.backgroundColor='white';
  } else body.style.backgroundColor='red';
});

myArray = [1 , 2, 3, 4]
function greet(name){
  greeting.textContent=`Greetings ${name}`
}
function multiply(num1,num2){
  let a = num1*num2
  console.log(a);
}
let html = document.querySelector('html');
html.addEventListener('click',
function(){
  console.log('Stop poking me')
})

const newElem = document.createElement('h1')
newElem.setAttribute('id','newElem');

function loop(number) {
    for (i = 1; i <= number; i++){
        console.log(i)
    };
    
}

// outer:
// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     inside:
//     for (var j = 0; j < 10; j++) {
//         console.log(j);

//         if (i == 5 && j ==5) {
            
//             break outer;
//             // breaks out of outer loop instead of only the inner one
//         }
//     }
// }

// The for/in statement allows iteration over properties of an object.
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    if (x == 'age') {description += person[x]}
    else description += person[x] + " ";
} // description = 'Paul Ken 18 '


// The `switch` statement checks for equality with `===`.
// Use 'break' after each case
// or the cases after the correct one will be executed too.
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}

// JavaScript functions are first class objects, so they can be reassigned to
// different variable names and passed to other functions as arguments - for
// example, when supplying an event handler:
function myFunction(){
    // this code will be called in 5 seconds' time
    console.log(`Hello World`)
}
setTimeout(myFunction, 5000);
// Note: setTimeout isn't part of the JS language, but is provided by browsers
// and Node.js.

let temporary=0;
(function(){
    temporary = 2;
    // We can access the global scope by assigning to the "global object", which
    // in a web browser is always `window`. The global object may have a
    // different name in non-browser environments such as Node.js.
    window.permanent = 10;
})();
temporary; // raises ReferenceError
permanent; // = 10

// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
myObj = {
    myString: "Hello world!",
    myFunc: function(){
        return myObj.myString;
    }
};
myObj.myFunc(); // = "Hello world!"

var myOtherFunc = function(){
    return this.myString.toUpperCase();
};
myObj.myOtherFunc = myOtherFunc;
myObj.myOtherFunc(); // = "HELLO WORLD!"

// We can also specify a context for a function to execute in when we invoke it
// using `call` or `apply`.

var anotherFunc = function(s){
    return this.myString + s;
};
anotherFunc.call(myObj, " And Hello Moon!"); // = "Hello World! And Hello Moon!"

// The `apply` function is nearly identical, but takes an array for an argument
// list.

anotherFunc.apply(myObj, [" And Hello Sun!"]); // = "Hello World! And Hello Sun!"

// This is useful when working with a function that accepts a sequence of
// arguments and you want to pass an array.

// But, `call` and `apply` are only temporary. When we want it to stick, we can
// use `bind`.

var boundFunc = anotherFunc.bind(myObj);
boundFunc(" And Hello Saturn!"); // = "Hello World! And Hello Saturn!"

String.prototype.firstCharacter = function(){
    return this.charAt(0);}

'abc'.firstCharacter();