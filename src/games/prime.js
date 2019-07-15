import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '..';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, divisor = 2) => { // функция для проверки простое число или составное
  if (divisor === number) {
    return 'yes'; // возвращает 'yes' если простое
  }
  if (number % divisor === 0) {
    return 'no'; // возвращает 'no' если составное
  }
  return isPrime(number, divisor + 1);
};

const gamePrime = (num = randomNumber(100, 1)) => cons(num, isPrime(num));

export default () => gameEngine(gamePrime, instruction);
