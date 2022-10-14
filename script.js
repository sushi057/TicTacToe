const playerFactor = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    const boardSection = document.querySelectorAll('.board-section');
    const restartButton = document.querySelector('#restart');

    restartButton.addEventListener('click', () => {
        boardSection.forEach((section) => {
            section.textContent = "";
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

    function checkWinner() {
        winningPattern.forEach((item) => {
            if (boardSection[item[0]] == this.activePlayer.marker && boardSection[item[1]] == this.activePlayer.marker && boardSection[item[2]] == this.activePlayer.marker){
                    console.log('randi ko ban');
                }
           })
    }

    return {
        activePlayer,
        currentPlayer,
        winningPattern,
        checkWinner
    }
})();


