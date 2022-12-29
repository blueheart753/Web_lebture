const rock = document.getElementById('rock');
const scissors = document.getElementById('scissor');
const paper = document.getElementById('paper');
const RandomRSP = Math.floor(Math.random() * 2);
const [Rock, Scissors, Paper] = document.getElementsByTagName('button');
Rock.addEventListener('click', ResultUser);
Scissors.addEventListener('click', ResultUser);
Paper.addEventListener('click', ResultUser);

function ResultUser() {
  
}
