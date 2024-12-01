let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');

const reset = () => {
    boxes.forEach((box) => {
        box.innerHTML = '';
        box.style.pointerEvents = 'auto';
    })
}

resetbtn.addEventListener('click', reset);


let turn0 = true;

const winning_patterns = [
    [0,1,2], [0,3,6], [0,4,8],
    [3,4,5], [6,7,8], [1,4,7],
    [2,5,8], [2,4,6]
];

const checkWinner = () => {
    let boxes = document.querySelectorAll('.box');
    let moves = Array.from(boxes).map(box => box.innerHTML);

    winning_patterns.forEach((pattern) => {
        if (moves[pattern[0]] && (moves[pattern[0]] === moves[pattern[1]]) && (moves[pattern[1]] === moves[pattern[2]])) {
            if (moves[pattern[0]] === 'X') {
                alert('Player X wins!');
                reset();
            } 
            else if (moves[pattern[0]] === 'O') {
                alert('Player O wins!');
                reset();
            }
            else{
                alert('It\'s a draw!');
                reset();
            }
        }
    });
};


boxes.forEach((box) =>{
    box.addEventListener('click', (e) => {
        if (turn0) {
            box.innerHTML = 'X';
            box.style.color = 'black';
            turn0 = false;
        } 
        else {
            box.innerHTML = 'O';
            box.style.color = 'black';
            turn0 = true;
        }
        box.style.pointerEvents = 'none';
        checkWinner();
    })
})
