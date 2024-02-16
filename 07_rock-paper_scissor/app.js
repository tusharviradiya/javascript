let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

console.log(choices);

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
} 

const drawGame = () => {
    console.log("game was draw bro, badhavu chhe!!");
    msg.innerText = "game was draw bro, badhavu chhe!!";
    msg.style.backgroundColor = "back";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("user win, you win!!");
        msg.innerText = "ab jan lega kya, jit to gaya";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("user loss, you lose bro!!");
        msg.innerText = "kal ana okey!!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true; 
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});