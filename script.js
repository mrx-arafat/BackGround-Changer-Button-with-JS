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
