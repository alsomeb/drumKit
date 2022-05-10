// eventListener takes 2 params, type eg click and then usually a function
// OR AN ANNONYMOUS FUNC, best prac!
//  utan (), PGA: annars kallas den direkt när koden/hemsidan körs!

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detecting button press
function buttonPressed(numberOfDrumButtons) {

  for (var i = 0; i < numberOfDrumButtons; i++) {

    // [i] pga det är en lista!, tar alla som har class .drum
    // loopar igenom dem, och addar en eventListener till dem
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      // find identity of button pressed med "this"
      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML); // for pressing button

      buttonAnimation(buttonInnerHTML);
    });

  }
}

function makeSound(key) {
  // Switch statement, take the code on a dif path depending on variable(case)
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(buttonInnerHTML);
    // else statement, covers all others we havent specified
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // utan .
  // after a delay remove the class pressed, animation.
  // first param is func to be executed, second one is ms to wait before exec.
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

buttonPressed(numberOfDrumButtons); // Kallad


// Detecting keyboard press
document.addEventListener("keydown", function(event) {
  // tap into the "event" that triggered the eventListener
  makeSound(event.key); // for using keyboard, event.key

  buttonAnimation(event.key);
})














// --------------------------------------------------------------------------
// JAVASCRIPT OBJECTS, properties är var innanför object, "object.property"
var bellBoy1 = {
  name: "Alex",
  age: "30",
  hasWorkPermit: true,
  languages: ["Swedish", "Norwegian", "English"],
  moveSuitCase: function () {
    console.log(this.name + " has moved your suitcase!");
  }
}

var houseKeeper1 = {
  name: "Agnes",
  age: "28",
  yearsOfExperience: 12,
  areasToClean: ["bathrooms", "bedrooms", "reception"]
}

console.log("Hello, my name is " + bellBoy1.name);

console.log("Hello, my name is " + houseKeeper1.name +
  " I have " + houseKeeper1.yearsOfExperience + " years exp.");

console.log(houseKeeper1.areasToClean);

bellBoy1.moveSuitCase();

// function som producerar HouseKeepers, CONSTRUCTOR FUNCTION, name Capitalized
function HouseKeeper(name, age, yearsOfExperience, areasToClean) {
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.areasToClean = areasToClean;
  this.sayHello = function () {
    console.log(this.name + " says hello!");
  }
}

// Create BellBoy object
var houseKeeper2 = new HouseKeeper("Kristoffer", 28, 12, ["bedrooms", "bathrooms"]);
console.log(houseKeeper2);
console.log(houseKeeper2.sayHello());


// PASSING FUNCS AS params to other FUNCS
// kan skriva debugger; sedan shift enter o kod för steppa osv, i chrome console
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

const addition = calculator(2, 3, add);
const multi = calculator(2, 3, multiply);
const minus = calculator(2, 3, subtract);
const divs = calculator(2, 3, divide);

console.log("\nadd: " + addition + "\nmultiply: " + multi + "\ndivide: " + divs + "\nminus: " + minus);
