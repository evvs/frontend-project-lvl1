import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
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


const createTask = () => {
  const question = randomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => gameEngine(createTask, instruction);
