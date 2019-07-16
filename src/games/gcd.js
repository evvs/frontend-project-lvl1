import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '..';

const instruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => (!b ? a : findGcd(b, a % b));

const gcdGame = (num1 = randomNumber(), num2 = randomNumber()) => cons(`${num1} ${num2}`, `${findGcd(num1, num2)}`);

export default () => gameEngine(gcdGame, instruction);
