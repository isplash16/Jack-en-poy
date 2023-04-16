const card = document.querySelector(".compcard");
var rock = document.getElementById("prock");
var paper = document.getElementById("ppaper");
var scissors = document.getElementById("pscissors");
var crock = document.getElementById("crock");
var cpaper = document.getElementById("cpaper");
var cscissors = document.getElementById("cscissors");

var playerScore = 0;
var computerScore = 0;

function play(userChoice) {
  // generate computer's choice

  var computerChoice = Math.random();
  console.log(computerChoice);
  if (computerChoice < 0.34) {
    computerChoice = "rock";
    crock.style.display = "block";
    cscissors.style.display = "none";
    cpaper.style.display = "none";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
    crock.style.display = "none";
    cscissors.style.display = "none";
    cpaper.style.display = "block";
  } else {
    computerChoice = "scissors";
    crock.style.display = "none";
    cscissors.style.display = "block";
    cpaper.style.display = "none";
  }
  if (userChoice === "rock") {
    rock.style.display = "block";
    scissors.style.display = "none";
    paper.style.display = "none";
  } else if (userChoice === "paper") {
    rock.style.display = "none";
    scissors.style.display = "none";
    paper.style.display = "block";
  } else if (userChoice === "scissors") {
    rock.style.display = "none";
    scissors.style.display = "block";
    paper.style.display = "none";
  }
  if (userChoice === computerChoice) {
    // compare choices and determine winner
    document.getElementById("result").innerHTML = "Tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("result").innerHTML = "You win!";
    playerScore++;
    document.getElementById("pscore").innerHTML = playerScore;
    console.log("player:" + playerScore);
  } else {
    document.getElementById("result").innerHTML = "Computer wins!";
    computerScore++;
    document.getElementById("cscore").innerHTML = computerScore;
    console.log("computer:" + computerScore);
  }
  if (playerScore==5){
  alert("Player Wins!");
  playerScore=0;
  computerScore=0;
  document.getElementById("pscore").innerHTML = playerScore;
  document.getElementById("cscore").innerHTML = computerScore;
  else if (computerScore==5){
    alert("Computer Wins!);
  playerScore=0;
  computerScore=0;
  document.getElementById("pscore").innerHTML = playerScore;
  document.getElementById("cscore").innerHTML = computerScore;
  

}
