import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomNumber from '../utils';

const instruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => (!b ? a : findGcd(b, a % b));

const generateTask = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));

  return cons(question, answer);
};

export default () => startGameEngine(generateTask, instruction);
