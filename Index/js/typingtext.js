//Her defineres teksten der skal loopes.
const textArr = ["Sammen står vi stærkere!", "Du er ikke alene!"];
//loopTimer er en variabel der bruges senere til at definere tiden for loopet.
var loopTimer;
let j = 0;
//Variablen currentText defineres til textArrs rækkefølge og splitter string til mindre strings.
var currentText = textArr[j].split("");

function frameLooper() {
  //Tilføjer den forreste karakter ved hvert loop til HTML elementet
  if (currentText.length > 0) {
    document.getElementById("typingtext").innerHTML += currentText.shift();
    //Går videre til næste punkt i textArr
  } else if (document.getElementById("typingtext").innerHTML.length === 0) {
    j++;
    if (j >= textArr.length) {
      // reset
      j = 0;
      currentText = textArr[0].split("");
    } else {
      // næste
      currentText = textArr[j].split("");
    }

    //Sletter sidste karakter i HTML elementet
  } else {
    document.getElementById("typingtext").innerHTML = document
      .getElementById("typingtext")
      .innerHTML.slice(0, -1);
  }
  loopTimer = setTimeout("frameLooper()", 120);
}
frameLooper();
