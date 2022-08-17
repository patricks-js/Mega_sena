import { newGame } from "../layout/newGame.mjs";

export function renderButtons() {
  const divButtons = document.querySelector("#megasena-buttons");
  divButtons.innerHTML = "";
  const buttonNewGame = () => {
    const button = document.createElement("button");
    button.innerHTML = `New Game`;
    button.addEventListener("click", newGame);
    return button;
  };
  divButtons.appendChild(buttonNewGame);
  const buttonRandomGame = () => {
    const button = document.createElement("button");
    button.innerHTML = `New Game`;
    button.addEventListener("click", newGame);
    return button;
  };
}
