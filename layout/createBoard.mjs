export function createBoard(state) {
  state.board = [];

  for (let i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}
