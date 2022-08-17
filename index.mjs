// Layout
import { createBoard } from "./layout/createBoard.mjs";

// Controllers
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
