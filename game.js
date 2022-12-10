// 4.b

const gameSection = document.querySelector(".game");
const playerResult = document.querySelector(".player-result span");
const computerResult = document.querySelector(".comp-result span");
const message = document.querySelector(".message");

const gameObject = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

let result = {
  player: 0,
  computer: 0,
};

let play = true;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  return gameObject[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    result.computer++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result.computer++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result.computer++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    result.player++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result.player++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result.player++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == computerSelection) {
    return "Draw";
  }
}

gameSection.addEventListener("click", function (ev) {
  ev.preventDefault();
  const btn = ev.target;

  if (!play) return;
  if (btn.tagName !== "BUTTON" && btn.tagName !== "IMG") return;

  const userInput = btn.title;
  const computerInput = computerPlay();

  message.textContent = playRound(userInput, computerInput);
  playerResult.textContent = result.player;
  computerResult.textContent = result.computer;

  if (result.player >= 5) {
    message.textContent = "Player Wins";
    play = false;
  } else if (result.computer >= 5) {
    message.textContent = "Computer Wins";
    play = false;
  }
});
