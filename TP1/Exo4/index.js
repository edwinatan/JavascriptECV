const div = document.createElement("div");
div.style.background = "purple";
div.style.width = "100%";
div.style.height = "300px";

const h1 = document.createElement("h1");
h1.textContent = "coucou";
h1.style.color = "white";
h1.style.textTransform = "uppercase";

div.appendChild(h1);
document.body.appendChild(div);
