'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


let selectElement = document.getElementById("target");
students.forEach(student => {
  let listOption=document.createElement("option");
  listOption.value = student.id;
  listOption.textContent = student.name;
  selectElement.appendChild(listOption);
   console.log(`Option: ${student.name} (${student.id})`);
})

