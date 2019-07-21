import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const instruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => (!b ? a : findGcd(b, a % b));

const createTask = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();

  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));

  return cons(question, answer);
};

export default () => gameEngine(createTask, instruction);
