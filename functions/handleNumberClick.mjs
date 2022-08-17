import {
  addNumber,
  numberInGame,
  removeNumberFromGame,
} from "../controllers/controllers.mjs";

export function handleNumberClick(state, e) {
  const value = Number(e.currentTarget.innerHTML);
  numberInGame(state, value)
    ? removeNumberFromGame(state, value)
    : addNumber(state, value);
  console.log(state.currentGame);
}
