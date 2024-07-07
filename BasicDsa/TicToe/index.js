let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset_game");
let newButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg_contianer");
let Message = document.querySelector("#msg");

let turnO = true;
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

boxes?.forEach((ev) => {
  ev.addEventListener("click", () => {
    if (turnO) {
      ev.innerHTML = "O";
      turnO = false;
    } else {
      ev.innerHTML = "X";
      turnO = true;
    }
    ev.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  Message.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let positionVal1 = boxes[pattern[0]].innerText;
    let positionVal2 = boxes[pattern[1]].innerText;
    let positionVal3 = boxes[pattern[2]].innerText;

    if (positionVal1 != "" && positionVal2 != "" && positionVal3 != "") {
      if (positionVal1 === positionVal2 && positionVal2 === positionVal3) {
        showWinner(positionVal1);
      }
    }
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newButton.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
