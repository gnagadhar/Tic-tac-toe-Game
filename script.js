let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true

winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableboxs();
    msgcontainer.classList.add("hide");
}
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner()
    });
});

const disableboxs = () => {
   for ( let box of boxs ) {
    box.disabled = true;
   }
} 

const enableboxs = () => {
     for ( let box of boxs) {
        box.disabled = false;
        box.innerText = "";
     }
}

 const showWinner = (winner) => {
      msg.innerText =`congratulation, Winner is ${winner}`;
      msgcontainer.classList.remove("hide");
      disableboxs()
 }

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posval1 = boxs[pattern[0]].innerText;
        let posval2 = boxs[pattern[1]].innerText;
        let posval3 = boxs[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 == posval2 && posval2 == posval3) {
               

                showWinner(posval1);
            }

        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);