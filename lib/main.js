"use strict";

// Part i - Print 212 using an arrow function

var boilingF;
boilingF = function boilingF() {
  return "212";
};
document.getElementById("boiling-temp").innerHTML = boilingF();

// Part ii - Print 32 using an arrow function

var freezingF;
freezingF = function freezingF() {
  return "32";
};
document.getElementById("freezing-temp").innerHTML = freezingF();

// Part iii - Print any number using an arrow function

var waterTemp;
waterTemp = function waterTemp() {
  return "74";
};
document.getElementById("water-temp").innerHTML = waterTemp();

// use setTimeout() to display footer content

setTimeout(function () {
  document.getElementById("good-temp").classList.add("show");
}, 3000);