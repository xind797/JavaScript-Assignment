'use strict';
const names = ['John', 'Paul', 'Jones'];
let targetElement = document.getElementById("target");
targetElement.innerHTML =''
    names.forEach(name => {
        const listItem=document.createElement("li");
        listItem.textContent = name;
        targetElement.appendChild(listItem);
    })


