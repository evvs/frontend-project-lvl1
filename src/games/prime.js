import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomNumber from '../utils';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const iter = (divisor = 2) => {
    if (divisor === number) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter();
};

const generateTask = () => {
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => startGameEngine(generateTask, instruction);
