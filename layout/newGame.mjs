import { resetGame } from "../controllers/resetGame.mjs";
import { render } from "./render.mjs";

export function newGame(state) {
  resetGame(state);
  render();
}
