import { gameEngine, randomNumber, cons } from '..';

const instruction = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (!b ? a : gcd(b, a % b)); // функция нахождения НОД

const gcdGame = (num1 = randomNumber(), num2 = randomNumber()) => cons(`${num1} ${num2}`, `${gcd(num1, num2)}`);

export default () => gameEngine(gcdGame, instruction);
