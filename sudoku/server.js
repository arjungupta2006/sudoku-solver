const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/solve", (req, res) => {

    const board = req.body.board;

    let input = "";
    for(let i=0;i<9;i++){
        input += board[i].join(" ") + "\n";
    }

    const process = exec("./solver", (error, stdout) => {
        if(error){
            return res.status(500).send("Error solving sudoku");
        }

        const rows = stdout.trim().split("\n");
        const solution = rows.map(r => r.split(" ").map(Number));

        res.json({solution});
    });

    process.stdin.write(input);
    process.stdin.end();
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});