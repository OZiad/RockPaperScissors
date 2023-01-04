const container = document.querySelector('#container');
const content = document.querySelector('.content');
content.addEventListener('click', (event) => { console.log(event);
     event.target.style.background = 'blue'; });
const redP = document.createElement('p');
redP.textContent = "Hey I’m red!";
redP.style.color = 'red';

const blueH3 = document.createElement('h3');
blueH3.textContent = "I’m a blue h3!";
blueH3.style.color = 'blue';



const div = document.createElement('div');
div.style.cssText = 'color: black; background: pink; border: black 2px solid';

container.appendChild(redP);
container.appendChild(blueH3);
container.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = 'I’m in a div!';

const me2 = document.createElement('p');
me2.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(me2);