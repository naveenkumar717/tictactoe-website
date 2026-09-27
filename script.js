let currentPlayer = "X";
let gameOver = false;

const statusText = document.getElementById("status");
const resultText = document.getElementById("result");
const buttons = document.querySelectorAll(".game-board button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.textContent !== "" || gameOver) {
            return;
        }

        button.textContent = currentPlayer;

        checkWinner();

        if (!gameOver) {
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
       statusText.textContent = "Player " + currentPlayer + "'s Turn";
        }
    });
});

function checkWinner() {

    const board = [];

    buttons.forEach(function(button) {
        board.push(button.textContent);
    });

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
           resultText.textContent = "Player " + currentPlayer + " Wins!";
statusText.textContent = "Game Over!";
gameOver = true;
return;
        }
    }

    if (!board.includes("")) {
       resultText.textContent = "It's a Draw!";
statusText.textContent = "Game Over!";
gameOver = true;
           
   }
}
const restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click", function() {
    buttons.forEach(function(button) {
        button.textContent = "";
    });

    currentPlayer = "X";
    gameOver = false;
});