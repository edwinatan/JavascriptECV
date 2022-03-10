const list = document.getElementById("list");
const listOfLi = document.querySelectorAll("li");

const createLi = document.createElement("li");
const liText = document.createTextNode("Coucou");

createLi.appendChild(liText);
list.replaceChild(createLi, listOfLi[1]);
