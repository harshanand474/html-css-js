let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("statusText");
let resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";

let board = ["", "", "", "", "", "", "", "", ""];

let gameOver = false;

cells.forEach(function(cell){

    cell.addEventListener("click", function(){

        let index = cell.dataset.index;

        if(board[index] != ""){
            return;
        }

        if(gameOver == true){
            return;
        }

        board[index] = currentPlayer;

        cell.innerHTML = currentPlayer;

        if(currentPlayer == "X"){
            cell.classList.add("x");
        }
        else{
            cell.classList.add("o");
        }

        checkWinner();

        if(gameOver == false){

            if(currentPlayer == "X"){
                currentPlayer = "O";
                statusText.innerHTML = "Player O Turn";
            }
            else{
                currentPlayer = "X";
                statusText.innerHTML = "Player X Turn";
            }

        }

    });

});

function checkWinner(){

    // rows
    if(board[0] != "" && board[0] == board[1] && board[1] == board[2]){
        winner(0,1,2);
    }

    else if(board[3] != "" && board[3] == board[4] && board[4] == board[5]){
        winner(3,4,5);
    }

    else if(board[6] != "" && board[6] == board[7] && board[7] == board[8]){
        winner(6,7,8);
    }

    // columns
    else if(board[0] != "" && board[0] == board[3] && board[3] == board[6]){
        winner(0,3,6);
    }

    else if(board[1] != "" && board[1] == board[4] && board[4] == board[7]){
        winner(1,4,7);
    }

    else if(board[2] != "" && board[2] == board[5] && board[5] == board[8]){
        winner(2,5,8);
    }

    // diagonal
    else if(board[0] != "" && board[0] == board[4] && board[4] == board[8]){
        winner(0,4,8);
    }

    else if(board[2] != "" && board[2] == board[4] && board[4] == board[6]){
        winner(2,4,6);
    }

}

function winner(a,b,c){

    gameOver = true;

    cells[a].classList.add("win");
    cells[b].classList.add("win");
    cells[c].classList.add("win");

    statusText.innerHTML = currentPlayer + " Wins";

}

resetBtn.addEventListener("click", function(){

    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    statusText.innerHTML = "Player X Turn";

    cells.forEach(function(cell){

        cell.innerHTML = "";

        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.classList.remove("win");

    });

});