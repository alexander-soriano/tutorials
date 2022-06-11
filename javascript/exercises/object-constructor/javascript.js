let band = {
  name: 'Franco',
  nationality: 'Filipino',
  genre: 'Rock',
  members: 'Franco Reyes',
  formed: 2008,
  split: false,
  albums:[
    {name: "Franco", released: 2010,
    },
    {name: "Soul Adventurer", released: 2013,
    },
  ],
  biography(){
    return `${this.name} is a ${this.nationality} ${this.genre} band.`
  },
};

// const cat = {
//   name : 'Bertie',
//   breed : 'Cymric',
//   color : 'white',
//   greeting: function() {
//     console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//   }
// }
// 
// const cat2 = {
//   name : 'Elfie',
//   breed : 'Aphrodite Giant',
//   color : 'ginger',
//   greeting: function() {
//     console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//   }
// }

function Cat(name,breed,color){
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = () => console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
}

cat = new Cat('Bertie','Cymric','white');
cat2 = new Cat('Elfie','Aphrodite Giant','ginger');

cat.greeting();
cat2.greeting();
    