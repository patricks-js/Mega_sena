import { handleNumberClick } from "../functions/handleNumberClick.mjs";

export function renderBoard(state) {
  const divGame = document.querySelector("#megasena-board");
  divGame.innerHTML = "";

  const ulNumbers = document.createElement("ul");

  for (let i = 0; i < state.board.length; i++) {
    let currentNumber = state.board[i];
    const liNumber = document.createElement("li");
    liNumber.innerHTML = currentNumber;
    liNumber.addEventListener("click", (e) => handleNumberClick(state, e));
    ulNumbers.appendChild(liNumber);
  }

  divGame.appendChild(ulNumbers);
}
