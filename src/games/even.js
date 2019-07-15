import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '..';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => ((number % 2 === 0) ? 'yes' : 'no');

const evenGame = (number = randomNumber()) => cons(number, isEven(number));

export default () => gameEngine(evenGame, instruction);
