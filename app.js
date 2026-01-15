let boxes = document.querySelectorAll(".box")
let newGameBtn = document.querySelector("#new-btn")
let resetBtn = document.querySelector("#reset-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let count = 0;
const resetGame = () => {
    turn0 = true;
    count =0;
    enableBoxes();
    msgContainer.classList.add("hide");
};



boxes.forEach((box) => {

    box.addEventListener("click", () => {
        // console.log("box was clicked");
        count++;
        console.log(count);

        if (turn0) {
            box.innerHTML = "O";
            // box.classList.add("player-o")
            box.style.color = "#3498db";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            // box.classList.add("player-x")
            box.style.color = "#e74c3c";
            turn0 = true;
        }
       
        if (count == 9) {
            console.log("draw");
            msg.innerText = `Game is Draw`;
            msgContainer.classList.remove("hide");
            disableBoxes();

        }
        box.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("player-x", "player-o");
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }

        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);