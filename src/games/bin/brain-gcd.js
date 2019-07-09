#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  askName, stopGame,
  conPair, s1stElement, s2ndElement, gcd,
} from '..';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
const userName = askName(); // узнаем имя и сохраняем в константу

// реализация игры
const gcdGame = (num1 = s1stElement(conPair()), num2 = s2ndElement(conPair()),
  acc = 0) => {
  if (acc === stopGame()) { // когда acc будет равен stopGame(по дефолту значение 3, можно поменять)
    return console.log(`Congratulations, ${userName}`); // выйти из рекурсии и закончить игру
  }
  console.log(`Question: ${num1} ${num2}`); // вопрос пользователю
  const userInput = Number(readlineSync.question('Your answer: ')); // ответ пользователя

  if (userInput !== gcd(num1, num2)) { // если пользователь дал неверный ответ
    return console.log(`${userInput} is wrong answer ;(. Correct answer was ${gcd(num1, num2)}.
Let's try again, ${userName}!`);
  }
  // если ответ верный, запускается рекурсия
  console.log('Correct!');
  return gcdGame(s1stElement(conPair()), s2ndElement(conPair()), acc + 1);
};

gcdGame();
