"use strict";

// which slide to move to as denoted by "s"
// all the slides are hidden by default, since they have opacity 0
function goToSlide(s) {

  // this will reset the class name back to just slide, deleting active, if it was there
  slides[currentSlide].className = "slide";


  // the following currentSlide is sort of an advanced version of currentIndex++
  // it works by modulo operator, which results in the remainder of two divided numbers
  // so: 4 % 2 is 0, 5 % 2 is 1, 1 % 5 is 1
  // because, 4 divided by 2 leaves no remainder, 5 divided by 2 leaves 1 remainder and 1 can't be divided by 5
  // so the 1 remains as is, if it was 2 % 5 then the remainder would be 2 and so on
  // to understand the statement below better let me explain a few cycles
  // at the beginning s = 1, since currentSlide = 0, and slides.length is 6
  // (1 + 6) % 6 => 7 % 6 = 1 <<< currentSlide is now equal to 1, when it is called next time it will be +1 from goToSlide
  // (2 + 6) % 6 => 8 % 6 = 2
  // (3 + 6) % 6 => 9 % 6 = 3
  // and so on, the s increases because each interval the currentSlide is made equal to the previous result
  // at the end when s becomes 6 it will be ... (6 + 6) % 6 => 12 % 6 = 0
  // so it will reset automatically
  currentSlide = (s + slides.length) % slides.length;
  // in active we set opacity to 1.
  slides[currentSlide].className = "slide active";
};

function nextSlide() {
  goToSlide(currentSlide + 1);

}

let slides = document.querySelectorAll("#all_slides .slide");
let currentSlide = 0;

// This triggers everything, the interval below can be changed to change slide timings
setInterval(nextSlide, 10000);

