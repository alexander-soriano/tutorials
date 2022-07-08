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
    for (var i = 1; i <= number; i++){
        return console.log(i)
    };
    
}

outer:
for (var i = 0; i < 10; i++) {
    inside:
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j ==5) {
            break inside;
            // breaks out of outer loop instead of only the inner one
        }
    }
}