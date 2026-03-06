const grid = document.getElementById("grid");

for (let i = 0; i < 81; i++) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;

    cell.addEventListener("input", () => {
    if (!/[1-9]/.test(cell.value)) {
        cell.value = "";
    }
});
    cell.min = 1;
    cell.max = 9;
    grid.appendChild(cell);
}

function getBoard() {
    const cells = document.querySelectorAll("#grid input");
    let board = [];
    let k = 0;

    for (let i = 0; i < 9; i++) {
        let row = [];
        for (let j = 0; j < 9; j++) {
            row.push(cells[k].value ? parseInt(cells[k].value) : 0);
            k++;
        }
        board.push(row);
    }

    return board;
}

function fillBoard(board) {
    const cells = document.querySelectorAll("#grid input");
    let k = 0;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            cells[k].value = board[i][j];
            k++;
        }
    }
}

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) return false;
        if (board[i][col] === num) return false;

        const r = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const c = 3 * Math.floor(col / 3) + (i % 3);

        if (board[r][c] === num) return false;
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {

            if (board[row][col] === 0) {

                for (let num = 1; num <= 9; num++) {

                    if (isValid(board, row, col, num)) {

                        board[row][col] = num;

                        if (solveSudoku(board))
                            return true;

                        board[row][col] = 0;
                    }
                }

                return false;
            }
        }
    }

    return true;
}

function solve() {
    let board = getBoard();

    if (solveSudoku(board)) {
        fillBoard(board);
    } else {
        alert("No solution exists");
    }
}

function clearGrid() {
    const cells = document.querySelectorAll("#grid input");
    cells.forEach(c => c.value = "");
}