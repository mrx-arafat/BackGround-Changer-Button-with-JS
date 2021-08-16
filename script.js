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

// way-5: varName.addEventListener('click',call fn)
const goldenButton = document.getElementById("make-golden");

goldenButton.addEventListener("click", makeGolden);

function makeGolden() {
  document.body.style.backgroundColor = "gold";
}

// way-6: varName.addEventListener('click', full fn)
const ghostWhiteButton = document.getElementById("make-ghostwhite");

ghostWhiteButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "ghostwhite";
});

// way-7: direct action. call varName.addEventListener('click', full fn)

document.getElementById("make-maroon").addEventListener("click", function () {
  document.body.style.backgroundColor = "maroon";
});
