import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '..';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const evenGame = (number = randomNumber()) => ((isEven(number)) ? cons(number, 'yes') : cons(number, 'no'));

export default () => gameEngine(evenGame, instruction);
