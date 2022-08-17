export function saveGame(state) {
  const isGameComplete = state.currentGame.length === 6;
  if (isGameComplete) {
    console.error(`O jogo não esta completo!`);
    return;
  }

  state.savedGame.push(state.currentGame);
}
