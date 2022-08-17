const state = {
  board: [],
  currentGame: [],
  savedGame: [],
};

(() => {
  addNumber(2);
  addNumber(4);
  addNumber(2);
  addNumber(4);
  addNumber(5);
  addNumber(5);
  addNumber(6);

  console.log(state.currentGame);
})();

function numberInGame(numberToCheck) {
  const includeNumber = state.currentGame.includes(numberToCheck);
  return includeNumber;
}

function removeNumberFromGame(numberToRemove) {
  const newGame = [];

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
  // Conditionals
  const numberBetweenOneAndSixty = numberToAdd >= 1 && numberToAdd <= 60;
  const maxSixNumbers = state.currentGame.length + 1 <= 6;
  const repeatNumber = numberInGame(numberToAdd);

  // Verifications
  !maxSixNumbers && console.log(`O jogo ja esta completo`);
  !numberBetweenOneAndSixty && console.log(`Numero invalido ${numberToAdd}`);
  repeatNumber && console.log(`Numero repetido, ${numberToAdd}`);

  // Increment
  if (numberBetweenOneAndSixty && maxSixNumbers && !repeatNumber) {
    state.currentGame.push(numberToAdd);
  }
}
