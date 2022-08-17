import { numberInGame } from "../controllers/numberInGame.mjs";
import { removeNumberFromGame } from "../controllers/removeNumberFromGame.mjs";
import { addNumber } from "../controllers/addNumber.mjs";

export function handleNumberClick(state, e) {
  const value = Number(e.currentTarget.innerHTML);
  numberInGame(state, value)
    ? removeNumberFromGame(state, value)
    : addNumber(state, value);
  console.log(state.currentGame);
}
