//way-2: ready fn just call in onclick
function makeRed() {
  document.body.style.backgroundColor = "red";
}
//way-3: onclick in the fn ,NB: just call it by name

const greenButton = document.getElementById("make-green");
//JUST fn name not makeGreen()
greenButton.onclick = makeGreen;

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//way-4: same like before just direct call fn

const blueButton = document.getElementById("make-blue");

blueButton.onclick = function () {
  document.body.style.backgroundColor = "blue";
};

// way-5: addEventListener('click')
const goldenButton = document.getElementById("make-golden");

goldenButton.addEventListener("click", makeGolden);

function makeGolden() {
  document.body.style.backgroundColor = "gold";
}
