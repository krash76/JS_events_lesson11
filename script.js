"use strict";

const btn = document.getElementById("btn");
const input = document.querySelector("input[type='text']");
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
const circleBtn = document.querySelector("#e_btn");
const inputRange = document.querySelector("input[type='range']");
const rangeSpan = document.getElementById("range-span");
rangeSpan.textContent = 50;

circleBtn.style.display = "none";

btn.addEventListener("click", () => {
  square.style.backgroundColor= input.value; 
});

inputRange.addEventListener("input", () => {
  rangeSpan.textContent = inputRange.value;
  circle.style.width = inputRange.value + "%";
  circle.style.height = inputRange.value + "%";
});



