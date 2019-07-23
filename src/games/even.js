import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const createTask = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => gameEngine(createTask, instruction);
