const person = {
name: {
  first: 'Bob',
  last: 'Smith',
},
  age: 32,
  bio,
  introduceSelf() {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};

function bio(){
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old`)
}

const myDataName = 'height';
const myDataValue = '1.75m';

function createPerson(name){
  object = {
    name,
    introduceSelf () {
      console.log(`Hi I'm ${this.name}`)
    },
  }
  return object
}

function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi I'm ${this.name}.`);
  }
}