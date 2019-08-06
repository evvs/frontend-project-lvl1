import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateTask = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => playGame(generateTask, instruction);
