import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const instruction = 'What is the result of the expression?';

const operators = '+-*';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const generateTask = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));

  return cons(question, answer);
};

export default () => playGame(generateTask, instruction);
