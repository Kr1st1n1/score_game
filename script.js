"use strict";


// Players
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
// Display
var displayNoOne = document.getElementById('number1');
var displayNoTwo = document.getElementById('number2');
// reset
var reset = document.getElementById('reset');

// Max Players
var maxPlayers = document.getElementById('maxPlayers');
// Max Players maxPlayersLabel
var maxPlayersLabel = document.getElementById('maxPlayersLabel');

// Player one hook
player1.addEventListener("click", function(){
  if(isMax())
  return;
  displayNoOne.innerText = parseInt(document.getElementById('number1').innerText, 10) + 1;
});

// Player two hook
player2.addEventListener("click", function(){
  if(isMax())
  return;
  displayNoTwo.innerText = parseInt(document.getElementById('number2').innerText, 10) + 1;
});

maxPlayers.addEventListener("change", function() {
  if(parseInt(this.value, 10) <= 0) {
    maxPlayers.value = 1;
    maxPlayersLabel.innerText = 1;
  } else {
      maxPlayersLabel.innerText = this.value;
  }
});

function isMax() {
 var max = parseInt(maxPlayers.value, 10);
 var playerOne =  parseInt(document.getElementById('number1').innerText, 10) + 1;
 var playerTwo = parseInt(document.getElementById('number2').innerText, 10) + 1;

 if (playerOne == max) {
   displayNoOne.style.color = "green";
 }
 if (playerTwo == max) {
   displayNoTwo.style.color = "blue";
 }

 if(playerOne > max || playerTwo > max) {
  return true;
 }
 return false;
};

reset.addEventListener("click", function(){
displayNoOne.innerText = "0";
displayNoTwo.innerText = "0";
maxPlayers.value = "5";
maxPlayersLabel.innerText = "5";
displayNoOne.style.color = "";
displayNoTwo.style.color = "";
});
