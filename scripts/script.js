function heroSlideShow() {
  if (imageCounter == 6) {
    imageCounter = 0;
  }
  bodyReference.style.background = `url(${wallpaperURL[imageCounter]}) no-repeat center center fixed`;
  bodyReference.style.backgroundSize = "cover";
  imageCounter++;
}

let wallpaperURL = [
  "./images/hero-images/john-zhou.jpg",
  "./images/hero-images/andrea-de-santis.jpg",
  "./images/hero-images/clay-banks.jpg",
  "./images/hero-images/david-emrich.jpg",
  "./images/hero-images/eugene-chystiakov.jpg",
  "./images/hero-images/masahiro-miyagi.jpg",
];
let bodyReference = document.body;
let imageCounter = 0;

heroSlideShow();
setInterval(heroSlideShow, 10000);
