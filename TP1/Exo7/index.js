const body = document.querySelector("body");
console.log("height", window.getComputedStyle(body, null).height);

const background = body.style.background;
console.log("background", window.getComputedStyle(body, null).background);
