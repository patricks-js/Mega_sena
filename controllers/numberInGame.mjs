export function numberInGame(state, numberToCheck) {
  const includeNumber = state.currentGame.includes(numberToCheck);
  return includeNumber;
}
