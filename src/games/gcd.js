import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '..';

const instruction = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => (!b ? a : findGCD(b, a % b));

const gcdGame = (num1 = randomNumber(), num2 = randomNumber()) => cons(`${num1} ${num2}`, `${findGCD(num1, num2)}`);

export default () => gameEngine(gcdGame, instruction);
