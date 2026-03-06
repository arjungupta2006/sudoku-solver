## Sudoku Solver

A simple web application that solves a 9×9 Sudoku puzzle instantly using a backtracking algorithm. Users can enter a partially filled Sudoku grid and the application computes and displays the completed solution.

### Features

* Interactive **9×9 Sudoku grid**
* **Instant solving** using a backtracking algorithm
* **Input validation** (only digits 1–9 allowed)
* **Dark themed UI**
* Clear and minimal interface

### Tech Stack

* **HTML** – structure of the application
* **CSS** – styling and grid layout
* **JavaScript** – Sudoku solving logic and interaction

### How It Works

The solver uses a **recursive backtracking algorithm**:

1. Find an empty cell in the grid.
2. Try numbers from **1–9**.
3. Check if the number satisfies Sudoku constraints:

   * Row uniqueness
   * Column uniqueness
   * 3×3 subgrid uniqueness
4. If valid, place the number and recursively solve the rest of the board.
5. If no valid number works, backtrack and try another value.

### Usage

1. Enter the known numbers of a Sudoku puzzle.
2. Leave empty cells blank.
3. Click **Solve** to compute the solution.
4. Use **Clear** to reset the grid.

### Future Improvements

* Sudoku **puzzle generator**
* **Difficulty levels**
* **Step-by-step solving visualization**
* Highlighting rows/columns while editing
