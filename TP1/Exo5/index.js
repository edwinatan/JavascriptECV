const tabP = document.querySelectorAll("p");

tabP.forEach((p) => {
  p.parentNode.removeChild(p);
});
