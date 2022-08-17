// Layout
import { render, createBoard } from "./layout/layout.mjs";

// Controllers

import {} from "./controllers/controllers.mjs";

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
