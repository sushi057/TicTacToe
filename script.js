const playerFactor = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    const boardSection = document.querySelectorAll('.board-section');
    const restartButton = document.querySelector('#restart');

    restartButton.addEventListener('click', () => {
        boardSection.forEach((section) => {
            window.location.reload();
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
    const playerTurn = document.querySelector('#current');
    const boardSection = document.querySelectorAll('.board-section');
    const status = document.querySelector('h2');

    let activePlayer = playerOne;

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

    function currentPlayer() {
        console.log('check');
        if (this.activePlayer == playerOne){
            playerTurn.textContent = "Player Two";
            this.activePlayer = playerTwo;
        }
        else{
            playerTurn.textContent = 'Player One';
            this.activePlayer = playerOne;
        }
    }

    function endGame() {
        boardSection.forEach((section) => {
            section.style.pointerEvents = 'none';
        })
    }

    function checkWinner() {

        if (boardSection.forEach((section) => {
            section.textContent !== '';
            })) {
            console.log('k');
            status.textContent = "TIE!";
        }
        winningPattern.forEach((item) => {
            if (boardSection[item[0]].textContent === boardSection[item[1]].textContent && boardSection[item[1]].textContent === boardSection[item[2]].textContent && boardSection[item[2]].textContent ){
                if (boardSection[item[2]].textContent == 'X') {
                    console.log("player one wins");
                    status.innerHTML = '<span id="current">Player One</span> Wins';
                    endGame();
                }
                else if (boardSection[item[2]].textContent == 'O'){
                    console.log("player two wins");
                    status.innerHTML = '<span id="current">Player Two</span> Wins!';
                    endGame();
                }
            }
        })
    }

    return {
        activePlayer,
        currentPlayer,
        checkWinner,
        playerTurn,
    }
})();


