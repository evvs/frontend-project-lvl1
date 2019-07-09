#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  askName, stopGame,
  s1stElement, s2ndElement, pickRandomOperator, conPair,
} from '..';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
const userName = askName(); // узнаем имя и сохраняем в константу


// реализация игры
const gameCalc = (num1 = s1stElement(conPair()), num2 = s2ndElement(conPair()),
  operator = pickRandomOperator(), acc = 0) => {
  if (acc === stopGame()) { // когда acc будет равен stopGame(по дефолту значение 3, можно поменять)
    return console.log(`Congratulations, ${userName}`); // выйти из рекурсии и закончить игру
  }

  console.log(`Question: ${num1} ${operator} ${num2}`); // вопрос пользователю
  const userInput = Number(readlineSync.question('Your answer: ')); // ответ пользователя
  // eslint-disable-next-line no-eval
  const correctAnswer = eval(num1 + operator + num2); // верный ответ

  if (userInput !== correctAnswer) { // если пользователь дал неверный ответ
    return console.log(`${userInput} is wrong answer ;(. Correct answer was ${correctAnswer}
  Let's try again, ${userName}!`);
  }
  // если ответ верный, запускается рекурсия
  console.log('Correct!');
  return gameCalc(s1stElement(conPair()),
    s2ndElement(conPair()),
    pickRandomOperator(), acc + 1);
};

gameCalc();
