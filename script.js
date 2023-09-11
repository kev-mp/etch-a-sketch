const board = document.querySelector('.board')

let boardSize = 700;

//Initializes board of given size
function initBoard(numberOfSquares) {
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
}


initBoard(16);

//Add event listener to fill in squares
let squares = document.querySelectorAll('.square');
function colorListener() {
    squares.forEach( square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        });
    });
}
colorListener();



//Clears board
document.getElementById('clear').addEventListener('click', () => {
    squares.forEach( square => {
        square.style.backgroundColor = "white";
    });
});

const slider = document.querySelector('.slider');
const barSize = document.querySelector('.bar-size')
barSize.innerHTML = `${slider.value}x${slider.value}`;

slider.oninput = () => {
    barSize.innerHTML = `${slider.value}x${slider.value}`;
}

document.querySelector(".change").addEventListener("click", () => {
    board.innerHTML = "";
    initBoard(slider.value);
    squares = document.querySelectorAll('.square');
    colorListener();
})