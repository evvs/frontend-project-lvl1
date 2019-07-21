import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const instruction = 'What is the result of the expression?';

const operators = '+-*';

const chooseRandomOperator = () => operators[randomNumber(0, operators.length)];

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

const createTask = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const operator = chooseRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));

  return cons(question, answer);
};

export default () => gameEngine(createTask, instruction);
