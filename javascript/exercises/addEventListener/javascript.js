const button = document.querySelector('#btn');
button.onclick = () => alert('Hello World');

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', (e) => {
    console.log(e.target);
    });

const nodeList = document.querySelectorAll('#container > button')
nodeList.forEach(node => {
    node.addEventListener('click', (e) => {
        console.log(e.target.id);
    })
});