const playerFactor = (name, points, sign) => {
    return {name, points, sign}
}

const player1 = playerFactor('Player 1', 0, '');
const player2 =playerFactor('Player 2', 0, '');

const gameBoard = (() => {
    const boardSection = document.querySelectorAll('.board-section');
    const restartButton = document.querySelector('#restart');

    restartButton.addEventListener('click', () => {
        boardSection.forEach((section) => {
            section.textContent = "";
    })})

    boardSection.forEach((section) => {
        section.addEventListener('click', () => {
            section.textContent = player1.sign;
        })
    })
})();


const game = (() => {
    // const xSign = document.querySelector('#x-sign');
    // const oSign = document.querySelector('#o-sign');
   
    // xSign.addEventListener('click', () => {
    //     xSign.classList.add('selected');
    //     player1.sign = 'X';
    //     player2.sign = 'O';
    //     console.log(player1.sign);
    //     return player1.sign;
    // })

    // oSign.addEventListener('click', () => {
    //     oSign.classList.add('selected');
    //     player1.sign = 'O';
    //     player2.sign = 'X';
    //     console.log(player1.sign);
    //     return player1.sign;
    // })    


})();


