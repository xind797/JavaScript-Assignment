let target=document.getElementById("target");
let ul=document.createElement("ul")

let firstLi=document.createElement("li");
firstLi.textContent=("First item")
ul.appendChild(firstLi);

let secondLi=document.createElement("li");
secondLi.textContent=("Second item")
ul.appendChild(secondLi);

let thirdLi=document.createElement("li");
thirdLi.textContent=("Third item")
ul.appendChild(thirdLi);

target.appendChild(ul)

secondLi.classList.add("my-item");