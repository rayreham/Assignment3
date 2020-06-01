// 10) Append the li to the ul element.

let newLi = document.createElement('li');
newLi.textContent = 'four';
let ul = document.querySelector('ul');
ul.appendChild(newLi);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

let li = document.querySelectorAll('ol li');

for(let i = 0; i <li.length; i++){
    li[i].style.color = 'green';
}

// 13) Remove the div with a class of footer.

let footer = document.getElementsByClassName('footer');
footer[0].parentNode.removeChild(footer[0]);




