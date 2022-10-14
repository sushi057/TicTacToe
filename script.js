const playerFactor = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    const boardSection = document.querySelectorAll('.board-section');
    const restartButton = document.querySelector('#restart');

    restartButton.addEventListener('click', () => {
        boardSection.forEach((section) => {
            section.textContent = "";
            game.resetPlayer();
            section.style.pointerEvents = null;
        })
    })

    boardSection.forEach((section) => {
        section.addEventListener('click', () => {
            section.textContent = game.activePlayer.marker;
            section.style.pointerEvents = "none";
            game.currentPlayer();
            game.checkWinner();
        })
    })

    return boardSection;
})();


const game = (() => {
    const playerOne = playerFactor('Player 1', 'X');
    const playerTwo = playerFactor('Player 2', 'O');
    const playerTurn = document.querySelector('#current-player');
    const boardSection = document.querySelectorAll('.board-section');
    const status = document.querySelector('h2');

    let activePlayer = playerOne;

    function currentPlayer() {
        if (this.activePlayer == playerOne){
            playerTurn.textContent = 'Player Two';
            this.activePlayer = playerTwo;
        }
        else{
            playerTurn.textContent = 'Player One';
            this.activePlayer = playerOne;
        }
    }

    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function resetPlayer() {
        playerTurn.textContent = "Player One";
        this.activePlayer = playerOne;
    }

    function checkWinner() {
        winningPattern.forEach((item) => {
            // console.log('new line');
            // console.log(item);
    
            if (boardSection[item[0]].textContent === boardSection[item[1]].textContent && boardSection[item[1]].textContent === boardSection[item[2]].textContent && boardSection[item[2]].textContent ){
                console.log('randi ko ban nai raicha');
                if (boardSection[item[2]].textContent == 'X') {
                    console.log("player one wins");
                    status.textContent = 'Player One Wins';
                }
                else if (boardSection[item[2]].textContent == 'O'){
                    console.log("player two wins");
                    status.textContent = 'Player Two Wins!';
                }
            }
        })
    }

    return {
        activePlayer,
        currentPlayer,
        // winningPattern,
        checkWinner,
        playerTurn,
        resetPlayer
    }
})();


