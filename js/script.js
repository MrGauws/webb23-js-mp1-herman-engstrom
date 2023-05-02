//First part of the assignment. Used the code from the class.
// Sets the hue value to 250
//There are only comments for the first array since it would basicly be the same comments all over the place.
const hue = 250;

//Calls out the first h1 element on the page and sets the color and aligns the text.
const h1 = document.querySelector('h1');
h1.style.color = `hsl(${hue}, 80%, 40%)`;
h1.style.textAlign = 'center';


// For-loop - Creates 5 lines with different color, rad 1-5 and styling for it
for(let i=1; i<6; i++){
    // Set the hue value based on the current iteration
    const pHue = 120+i*15;

    const p = document.createElement('p');
    document.body.append(p);
    // Set the text content of the <p> element to 'Rad' followed by the current iteration number
    p.innerText = 'Rad ' + i;
    //Styling for Rad.
    p.style.backgroundColor = `hsl(${pHue}, 80%, 80%)`;
    p.style.fontSize = `${20 + i * 40}%`;
    p.style.lineHeight = `${100 + i * 15}%`;
    p.style.color = '#6E6EF7';
    p.style.fontWeight = 'bold';
    p.style.textAlign = 'center';
    p.style.maxWidth = '90%';
    p.style.marginLeft = '5%';
}
//---------- Creating the div for the Arrays and styles it ------------
const container = document.createElement('div');
container.style.border = '1px solid black';
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.paddingTop = '30px';
container.style.paddingBottom = '30px';
container.style.maxWidth = '90%';
container.style.marginLeft = '5';
container.style.marginLeft = '5%';
// Appends the container element, which contains all the previously created unordered lists and list items, to the body of the HTML document.
document.body.appendChild(container);

//---------------------- Array 1 ------------------------
// Define an array of numbers from 0 to 9
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const list = document.createElement('ul');
// Loop through each number in the array
for (let i = 0; i < numbers.length; i++) {
    const listItem = document.createElement('li');
    // Set the text content of the list item to the current number
    listItem.innerText = numbers[i];
    // Add the list item to the unordered list
    list.appendChild(listItem);
}
//Appends the list
container.appendChild(list);

//---------------------- Array 2 ------------------------
const numbrero = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const lista = document.createElement('ul');
for (let i = 0; i < numbrero.length; i++) {
    const listaItem = document.createElement('li');
    listaItem.innerText = numbrero[i];
    lista.appendChild(listaItem);
}
lista.style.textAlign = 'center';
container.appendChild(lista);

//---------------------- Array 3 ------------------------
const textNummer = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
const ul = document.createElement('ul');
container.appendChild(ul);
ul.style.textAlign = 'right';
for (let i = 0; i < textNummer.length; i++) {
    const li = document.createElement('li');
    li.innerText = textNummer[i];
    ul.append(li);
}


//Counts the for-loop and sets the proper color. - This part is messy, don't touch, might explode. It checks for the number 4, number 8 and the word "sex". I've used the parentnode since of the hierarchy, I could not get it to work otherwise.
// If the parent of the li element is "list" and the text content is "4", change the background color to '#A8A8F0' and the text color to white
// If the parent of the li element is "list" and the index is even, change the background color to black and the text color to white
// If the parent of the li element is "list" and the index is odd, change the background color to white and the text color to black
// If the parent of the li element is "lista" and the text content is "8", change the background color to '#A8A8F0' and the text color to white
// If the parent of the li element is "ul" and the text content is "sex", change the background color to '#A8A8F0' and the text color to white
const lis = document.querySelectorAll('li');
for (let i = 0; i < lis.length; i++) {
    if (lis[i].parentNode === list && lis[i].innerText === '4') {
        lis[i].style.background = '#A8A8F0';
        lis[i].style.color = 'white';    
    } else if (lis[i].parentNode === list && i % 2 === 0) {
        lis[i].style.background = 'black';
        lis[i].style.color = 'white';    
    } else if (lis[i].parentNode === list && i % 2 !== 0) {
        lis[i].style.background = 'white';
        lis[i].style.color = 'black';    
    } else if (lis[i].parentNode === lista && lis[i].innerText === '8') {
        lis[i].style.background = '#A8A8F0';
        lis[i].style.color = 'white';    
    } else if (lis[i].parentNode === ul && lis[i].innerText === 'sex') {
        lis[i].style.background = '#A8A8F0';
        lis[i].style.color = 'white';
    } else if (lis[i].parentNode === lista && i % 2 === 0) {
        lis[i].style.background = 'white';
        lis[i].style.color = 'black';
    } else if (lis[i].parentNode === lista && i % 2 !== 0) {
        lis[i].style.background = 'black';
        lis[i].style.color = 'white';
    } else if (lis[i].parentNode === ul && i % 2 === 0) {
        lis[i].style.background = 'black';
        lis[i].style.color = 'white';
    } else if (lis[i].parentNode === ul && i % 2 !== 0) {
        lis[i].style.background = 'white';
        lis[i].style.color = 'black';
    } else {
        lis[i].style.background = 'blue';
        lis[i].style.color = 'white';
    }
}


//Creates the border and other styling to match the assignment.
const uls = document.querySelectorAll('ul');
for (let i = 0; i < uls.length; i++) {
    uls[i].style.listStyle = 'none';
    uls[i].style.padding = '0';
    uls[i].style.border = '10px solid #A8A8F0';
    uls[i].style.width = '50px';
    const lis = uls[i].querySelectorAll('li');
    for (let j = 0; j < lis.length; j++) {
        lis[j].style.padding = '0';
        lis[j].style.maxWidth = '50px';
    }
}


// It works ¯\_(ツ)_/¯ 