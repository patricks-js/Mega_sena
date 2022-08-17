export function removeNumberFromGame(state, numberToRemove) {
  const newGame = [];
  const numberBetweenOneAndSixty = numberToRemove >= 1 && numberToRemove <= 60;
  if (!numberBetweenOneAndSixty) {
    return;
  }

  for (let i = 0; i < state.currentGame.length; i++) {
    let currentNumber = state.currentGame[i];
    if (currentNumber === numberToRemove) {
      continue;
    }
    newGame.push(currentNumber);
  }
  state.currentGame = newGame;
}
