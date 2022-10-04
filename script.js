let redValueBox = document.querySelector(".value-red");
let redSlider = document.getElementById("slider-red");
redValueBox.innerHTML = redSlider.value;

let greenValueBox = document.querySelector(".value-green");
let greenSlider = document.getElementById("slider-green");
greenValueBox.innerHTML = greenSlider.value;

let blueValueBox = document.querySelector(".value-blue");
let blueSlider = document.getElementById("slider-blue");
blueValueBox.innerHTML = blueSlider.value;

//HEX變數
let hexRed = createHex(redValueBox.innerHTML);
let hexGreen = createHex(blueValueBox.innerHTML);
let hexBlue = createHex(greenValueBox.innerHTML);

//HEX預設值
const hexCode = `#${hexRed}` + `${hexGreen}` + `${hexBlue}`;
document.querySelector(".hex-value").textContent = hexCode;

//Ｂackgroung-color預設值
// body :
let background = document.querySelector("body");
background.style = `background-color: rgb(${redValueBox.innerHTML},${greenValueBox.innerHTML},${blueValueBox.innerHTML})`;
// slider:
let sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  slider.style = `background-color: #${hexRed}` + `${hexGreen}` + `${hexBlue}`;
});

//監聽SLIDER
const rgbSection = document.querySelector(".rgb-section");
rgbSection.addEventListener("input", inputRgb);

function inputRgb(event) {
  const target = event.target;
  const value = Number(event.target.value);
  const labelValue = target.parentElement.nextElementSibling;

  if (target.matches("#slider-red")) {
    redValueBox.innerHTML = value;
    hexRed = createHex(redValueBox.innerHTML);
  } else if (target.matches("#slider-green")) {
    greenValueBox.innerHTML = value;
    hexGreen = createHex(greenValueBox.innerHTML);
  } else {
    blueValueBox.innerHTML = value;
    hexBlue = createHex(blueValueBox.innerHTML);
  }
  document.querySelector(".hex-value").textContent =
    `#${hexRed}` + `${hexGreen}` + `${hexBlue}`;

  background.style =
    `background-color: #${hexRed}` + `${hexGreen}` + `${hexBlue}`;

  sliders.forEach((slider) => {
    slider.style =
      `background-color: #${hexRed}` + `${hexGreen}` + `${hexBlue}`;
  });
}

function createHex(rgb) {
  let hex = "";
  let rgbCode = Number(rgb);
  if (rgbCode.toString(16).length < 2) {
    hex = 0 + rgbCode.toString(16);
  } else {
    hex = rgbCode.toString(16);
  }

  return hex.toUpperCase();
}