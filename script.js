const playerFactor = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    const boardSection = document.querySelectorAll('.board-section');
    const restartButton = document.querySelector('#restart');

    restartButton.addEventListener('click', () => {
        boardSection.forEach((section) => {
            section.textContent = "";
    })})

    boardSection.forEach((section) => {
        section.addEventListener('click', () => {
            section.textContent = game.activePlayer.marker;
            game.currentPlayer();
        })
    })
})();


const game = (() => {
    const playerOne = playerFactor('Player 1', 'X');
    const playerTwo = playerFactor('Player 2', 'O');
    const playerTurn = document.querySelector('#current-player');

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

    return {
        activePlayer,
        currentPlayer
    }
})();


