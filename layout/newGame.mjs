import { resetGame } from "../controllers/controllers.mjs";
import { render } from "./layout.mjs";

export function newGame(state) {
  resetGame(state);
  render();
}
