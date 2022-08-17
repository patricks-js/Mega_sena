const state = {
  board: [],
  currentGame: [],
  savedGame: [],
};

function numberInGame(numberToCheck) {
  const includeNumber = state.currentGame.includes(numberToCheck);
  return includeNumber;
}

function removeNumberFromGame(numberToRemove) {
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

function addNumber(numberToAdd) {
  const numberBetweenOneAndSixty = numberToAdd >= 1 && numberToAdd <= 60;
  const plays = state.currentGame.length;
  const maxSixNumbers = plays + 1 <= 6;
  const repeatNumber = numberInGame(numberToAdd);

  !maxSixNumbers &&
    console.error(`O jogo ja esta completo, máximo de jogadas: ${plays}`);
  !numberBetweenOneAndSixty && console.error(`Numero invalido: ${numberToAdd}`);
  repeatNumber && console.error(`Numero repetido: ${numberToAdd}`);

  if (numberBetweenOneAndSixty && maxSixNumbers && !repeatNumber) {
    state.currentGame.push(numberToAdd);
  }
}

// function isGameComplete() {
//   return state.currentGame.length === 6;
// }

function saveGame() {
  const isGameComplete = state.currentGame.length === 6;
  if (isGameComplete) {
    console.error(`O jogo não esta completo!`);
    return;
  }

  state.savedGame.push(state.currentGame);
}

function resetGame() {
  state.currentGame = [];
}

(() => {
  console.log(state.currentGame);
})();
