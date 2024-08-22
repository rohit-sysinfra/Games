let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#p");

const getcompChoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};
const drawgame = () => {
  msg.innerText = "Game Draw! Please Play Again";
  msg.style.backgroundColor = "gray";
};

const winner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose!! ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userChoice) => {
  console.log("user choice=", userChoice);
  const compChoice = getcompChoice();
  console.log("computer choice: ", compChoice);
  if (userChoice === compChoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userChoice === "Rock") {
      userwin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userwin = compChoice === "Scissor" ? false : true;
    } else {
      userwin = compChoice === "Paper" ? true : false;
    }
    winner(userwin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
    // console.log("clicked",userChoice);
  });
});
