let userScore = 0;
let compScore = 0;
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

function getComputerChoice() {
  const random = Math.ceil(Math.random() * 3);
  if (random === 1) return "rock";
  else if (random === 2) return "paper";
  else if (random === 3) return "scissor";
}

function convertToWord(letter) {
  if (letter == "rock") return "Rock";
  if (letter == "paper") return "Paper";
  if (letter == "scissor") return "Scissor";
}
function win(user, computer) {
  userScore++;
  userScore_span.innerText = userScore;
  compScore_span.innerTexT = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML =
    convertToWord(user) +
    smallUserWord +
    " beats " +
    convertToWord(computer) +
    smallCompWord +
    " You win!!!";
}

function lose(user, computer) {
  compScore++;
  userScore_span.innerText = userScore;
  compScore_span.innerText = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML =
    convertToWord(computer) +
    smallCompWord +
    "(comp) beats " +
    convertToWord(user) +
    smallUserWord +
    "(user) You Loose!!!";
}

function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML =
    convertToWord(user) +
    smallUserWord +
    " draws " +
    convertToWord(computer) +
    smallCompWord +
    "Its a draw!!!";
}

function game(userChoice) {
  const compChoice = getComputerChoice();

  switch (userChoice + compChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, compChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, compChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissor_div.addEventListener("click", function () {
    game("scissor");
  });
}
main();
