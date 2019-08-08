import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor > number / 2) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const generateTask = () => {
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => playGame(generateTask, instruction);
