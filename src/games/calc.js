import { cons } from '@hexlet/pairs';
import {
  gameEngine, randomNumber,
} from '..';

const instruction = 'What is the result of the expression?';

export const randomOperator = () => { // функция, возвращающая рандомный символ из строки
  const operators = '+-*'; // cписок операторов
  return operators[randomNumber(operators.length)];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return '';
  }
};
const gameCalc = (num1 = randomNumber(), num2 = randomNumber(), operator = randomOperator()) => {
  const question = `${num1} ${operator} ${num2}`;
  const answer = `${calculate(num1, num2, operator)}`;

  return cons(question, answer);
};

export default () => gameEngine(gameCalc, instruction);
