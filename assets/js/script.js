/* This first functhion will contain all
 of the game logic whitin itself */
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissor");
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ["rock", "paper", "scissors"]

        playerOptions.forEach((option) => {
            option.addEventListener("click", function () {
                /* Will calculate the amount of mo*/
                const movesLeft = document.querySelector(".movesleft");
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;
                /*Calculates a random choice for the computer */
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice)
                /*Sets the amount of available moves */
                if (moves === 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
        });

    };

    const winner = (player, computer) => {
        /* Below we are setting conditions of each combination of options*/
        const result = document.querySelector(".result");
        const playerScoreBoard = document.querySelector(".p-count");
        const computerScoreBoard = document.querySelector(".c-count");
        player = player.toLowerCase();
        computer = computer.toLowerCase();/*Converting player and computer text to lowercase */
        if (player === computer) {
            result.textContent = "Tie"; /*If the options picked are the same, the game will tie */
        }
        else if (player === "rock") {
            if (computer === "paper") {
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore; /*Updating the computers score*/

            } else {
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore; /*Updating the players score */
            }
        }
        else if (player === "scissors") {
            if (computer === "rock") {
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player === "paper") {
            if (computer === "scissors") {
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    };
    /*After the gameplay function has ran this function will display the appropriate message */
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector(".move");
        const result = document.querySelector(".result");
        const reloadBtn = document.querySelector(".reload");

        playerOptions.forEach((option) => {
            option.style.display = "none";
        });

        chooseMove.innerText = "Game Over!!";
        movesLeft.style.display = "none";
        /*The message if you win */
        if (playerScore > computerScore) {
            result.style.fontSize = "2rem";
            result.innerText = "You Won The Game";
            result.style.color = "#308D46";
        }  /*The message if you lose */
        else if (playerScore < computerScore) {
            result.style.fontSize = "2rem";
            result.innerText = "You Lost The Game";
            result.style.color = "red";
        }  /*The message if you tie */
        else {
            result.style.fontSize = "2rem";
            result.innerText = "Tie";
            result.style.color = "grey";
        } /*The displayrd reload button  */
        reloadBtn.innerText = "Restart";
        reloadBtn.style.display = "flex";
        reloadBtn.addEventListener("click", () => {
            window.location.reload();
        });
    };

    playGame();

};
/*Calling the game fucntion to run */
game();