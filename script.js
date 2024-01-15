let boxes = document.querySelectorAll(".box");
console.log(boxes);
let resetButton = document.querySelector("#reset-game");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newBtn = document.querySelector("#newBtn");

let turnO = true; //* turnO or turnX;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";

      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};
const showWinner = (winner) => {
  msg.innerHTML = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  winPattern.forEach((pattern) => {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log(`Winner is ${posVal1}`);
        showWinner(posVal1);
      }
    }
  });
};

newBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
