const board = document.querySelector('.board')


let numberOfSquares = 65;
let boardSize = 600;

for (let i = 0; i < numberOfSquares; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    board.appendChild(row);
    
    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${boardSize/numberOfSquares}px`;
        square.style.height = `${boardSize/numberOfSquares}px`;
        row.appendChild(square);
    }
}


const squares = document.querySelectorAll('.square');

squares.forEach( square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
    });
});