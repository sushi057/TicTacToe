const gameBoard = (() => {
    const boardSection = document.querySelectorAll('.board-section');

    boardSection.forEach((section) => {
        section.addEventListener('click', () => {
            section.textContent = displayControls.sign;
        })
    })
})();

const displayControls = (() => {
    const xSign = document.querySelector('#x-sign');
    const oSign = document.querySelector('#o-sign');
   
 
    xSign.addEventListener('click', () => {
        xSign.classList.add('selected');
        let sign = 'X';
        console.log(sign);
        return sign;
    })

    oSign.addEventListener('click', () => {
        oSign.classList.add('selected');
        let sign = 'O';
        console.log(sign);
        return sign;
    })

    
    })
();
const boardSection = document.querySelectorAll('.board-section');

const restartButton = document.querySelector('#restart');

restartButton.addEventListener('click', () => {
    console.log('muji');
    boardSection.forEach((section) => {
        console.log('radi');
        console.log(section.textContent);
        section.textContent = '';
    })
});