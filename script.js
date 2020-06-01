// 1) Select the section with an id of container without using querySelector.
let container = document.getElementById("container");

// 2) Select the section with an id of container using querySelector.
let element = document.querySelector("#container");

// 3) Select all of the list items with a class of "second".
let elements = ddocument.getElementsByClassName("second");

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
let ol_third = document.querySelector("ol .third");
console.log(ol_third);

//5) Give the section with an id of container the text "Hello!".
let loc = document.getElementById('container');
loc.innerHTML = "Hello!";

//6) Add the class main to the div with a class of footer.
let new_element = document.getElementsByClassName('footer');
new_element.classList = "main";
//This should be the soutlion but it gives me errors
new_element.classList.add("main");

// 7 - Remove the class main on the div with a class of footer. 
footer.classList.remove("main");

// 8 - Create a new li element.
let newEl = document.createElement("li");

// 9 - Give the li the text "four".
newEl.innerText = "four";

//10 - Append the li to the ul elementlet newLi = document.createElement('li');
newLi.textContent = 'four';
let ul = document.querySelector('ul');
ul.appendChild(newLi);

//12 - Loop over all of the lis inside the ol tag and give them a background color of "green".

let li = document.querySelectorAll('ol li');

for(let i = 0; i <li.length; i++){
    li[i].style.color = 'green';
}

//13 - Remove the div with a class of footer.

let footer = document.getElementsByClassName('footer');
footer[0].parentNode.removeChild(footer[0]);



