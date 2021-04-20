var i = 0; //Start point
var images = [];
var time = 3000;

// Billede liste
images[0] = "images/hjerte.jpg";
images[1] = "images/venner.jpg";
images[2] = "images/lys.jpg";

// Billede skift
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
