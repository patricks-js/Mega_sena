// Layout
import { createBoard } from "./layout/createBoard.mjs";
import { newGame } from "./layout/newGame.mjs";

// Controllers
import { addNumber } from "./controllers/addNumber.mjs";
import { removeNumberFromGame } from "./controllers/removeNumberFromGame.mjs";
import { saveGame } from "./controllers/saveGame.mjs";
import { resetGame } from "./controllers/resetGame.mjs";
import { render } from "./layout/render.mjs";

const state = {
  board: [],
  currentGame: [],
  savedGame: [],
};

// function isGameComplete() {
//   return state.currentGame.length === 6;
// }

(() => {
  createBoard(state);
  render(state);
})();
