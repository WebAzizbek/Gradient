let body = document.querySelector("body");
let container = document.querySelector(".container");
let text = document.querySelector(".color-text");

const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// random color function
function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }
  return color;
}

// set color gradient to body
function setGradient() {
  let color1 = getGradient();
  let color2 = getGradient();
  let randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
  body.style.background = bgColor;
  text.textContent = bgColor;
}

container.addEventListener("click", () => {
  setGradient();
});
