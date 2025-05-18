//    Tic Tac Toe Game elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let playAgainBtn = document.querySelector("#playAgainBtn");
let restartBtn = document.querySelector("#restartBtn");
let result = document.querySelector(".result");
let winText = document.querySelector("#resultText");
let X = document.querySelector("#playerXScore");
let O = document.querySelector("#playerOScore");

//  Game variables
let turnO = true;
let count = 0;
let playerO = 0;
let playerX = 0;

//  Game functions
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6], 
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//  Game logic
//    Printing X & O as playing the game
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let winner = checkWinner();

        if(count==9 && !winner){
            gameDraw();
        }
    });
});

//    Display Draw Condition
gameDraw=()=>{
    winText.innerText = `Game was a Draw.`
    result.classList.remove("hidden");
}

//    Confirming winner
checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                if(pos1==="O"){
                    playerO++;
                    O.innerText=`Player O: ${playerO}`;
                }else{
                    playerX++;
                    X.innerText=`Player X: ${playerX}`;
                }
                showWinner(pos1);
                return true;
            }
        }
    }
}

//    Display winner
showWinner=(winner)=>{
    winText.innerText = `Congratulation, Winner is ${winner}`;
    result.classList.remove("hidden");
    disableBoxes();
}

//    Disable all the remaning box's after winning 
disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
} 

//    Opposit od disableBoxes()
enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//    Play New Game Or Reset Game
reStartGame=()=>{
    turnO=true;
    count=0;
    result.classList.add("hidden");
    enableBoxes();
}

//    Staring New Game
newGame=()=>{
    reStartGame();
    playerO = 0;
    playerX = 0;
    O.innerText=`Player O: ${playerO}`;
    X.innerText=`Player X: ${playerX}`;
}

//  Add Event Listeners on buttons
resetBtn.addEventListener("click",reStartGame);
playAgainBtn.addEventListener("click",reStartGame);
restartBtn.addEventListener("click",newGame);





