function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("/sound/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("/sound/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("/sound/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("/sound/tom-4.mp3");
      tom4.play();

    case "j":
      var snare = new Audio("/sound/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("/sound/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("/sound/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  changeButtonColor(event.key);
});

var drumW = document.getElementsByClassName("drum-w")[0];
drumW.addEventListener("click", function() {
  var button = drumW.innerHTML;
  makeSound(button);
});
var drumA = document.getElementsByClassName("drum-a")[0];
drumA.addEventListener("click", function() {
  var button = drumA.innerHTML;
  makeSound(button);
});
var drumS = document.getElementsByClassName("drum-s")[0];
drumS.addEventListener("click", function() {
  var button = drumS.innerHTML;
  makeSound(button);
});
var drumD = document.getElementsByClassName("drum-d")[0];
drumD.addEventListener("click", function() {
  var button = drumD.innerHTML;
  makeSound(button);
});
var drumJ = document.getElementsByClassName("drum-j")[0];
drumJ.addEventListener("click", function() {
  var button = drumJ.innerHTML;
  makeSound(button);
});
var drumK = document.getElementsByClassName("drum-k")[0];
drumK.addEventListener("click", function() {
  var button = drumK.innerHTML;
  makeSound(button);
});
var drumL = document.getElementsByClassName("drum-l")[0];
drumL.addEventListener("click", function() {
  var button = drumL.innerHTML;
  makeSound(button);
});

function changeButtonColor(currentKey) {
  var pressedButton = document.getElementById(currentKey);

  pressedButton.classList.add("pressed");

  setTimeout(function() {
    pressedButton.classList.remove("pressed");
  }, 100);
}
