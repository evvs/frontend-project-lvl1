import { cons } from '@hexlet/pairs';
import {
  gameEngine, randomNumber, randomOperator,
} from '..';

const instruction = 'What is the result of the expression?';

// eslint-disable-next-line no-eval
const gameCalc = (num1 = randomNumber(), num2 = randomNumber(), operator = randomOperator()) => cons(`${num1} ${operator} ${num2}`, `${eval(num1 + operator + num2)}`);

export default () => gameEngine(gameCalc, instruction);
