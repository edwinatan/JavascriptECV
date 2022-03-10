const tabImg = document.querySelectorAll("img");
var theImg = document.getElementById("theImg").src;

tabImg.forEach((img, i) => {
  if (i != 2) {
    img.setAttribute("src", theImg);
  }
});
