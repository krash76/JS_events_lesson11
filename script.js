"use strict";

const btn = document.getElementById("btn");
const input = document.querySelector("input[type='text']");
const square = document.querySelector("#square");
const circleBtn = document.querySelector("#e_btn");
circleBtn.style.display = "none";

btn.addEventListener("click", () => {
  square.style.backgroundColor= input.value; 
});




