import { numberInGame } from "./controllers.mjs";

export function addNumber(state, numberToAdd) {
  const numberBetweenOneAndSixty = numberToAdd >= 1 && numberToAdd <= 60;
  const plays = state.currentGame.length;
  const maxSixNumbers = plays + 1 <= 6;
  const repeatNumber = numberInGame(state, numberToAdd);

  !maxSixNumbers &&
    console.error(`O jogo ja esta completo, máximo de jogadas: ${plays}`);
  !numberBetweenOneAndSixty && console.error(`Numero invalido: ${numberToAdd}`);
  repeatNumber && console.error(`Numero repetido: ${numberToAdd}`);

  if (numberBetweenOneAndSixty && maxSixNumbers && !repeatNumber) {
    state.currentGame.push(numberToAdd);
  }
}
