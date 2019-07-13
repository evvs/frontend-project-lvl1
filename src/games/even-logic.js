import { gameEngine, randomNumber, cons } from '..';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number = randomNumber()) => {
  if (number % 2 === 0) {
    return cons(number, 'yes');
  }
  return cons(number, 'no');
};

export default () => gameEngine(isEven, instruction);
