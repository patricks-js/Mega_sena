import { renderBoard, renderButtons } from "./layout.mjs";

export function render(state) {
  renderBoard(state);
  renderButtons();
}
