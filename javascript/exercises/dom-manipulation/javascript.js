const container = document.querySelector('#container');

const red = document.createElement('p');
red.style.color='red';
red.textContent="Hey I'm red!";
container.appendChild(red);

const blackPink = document.createElement('div');
blackPink.style.cssText='border: 1px solid black; background-color: pink;'
container.appendChild(blackPink);

const h1 = document.createElement('h1');
h1.textContent="I'm in a div"
blackPink.appendChild(h1);

const p = document.createElement('p');
p.textContent='ME TOO';
blackPink.appendChild(p);
