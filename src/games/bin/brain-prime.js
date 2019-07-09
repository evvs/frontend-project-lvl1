#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  askName, stopGame, isPrime, randomNumber1To99,
} from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');
const userName = askName(); // узнаем имя и сохраняем в константу

// реализация игры
const gamePrime = (number = randomNumber1To99() + 1, acc = 0) => {
  if (acc === stopGame()) { // когда acc будет равен stopGame(по дефолту значение 3, можно поменять)
    return console.log(`Congratulations, ${userName}`); // выйти из рекурсии и закончить игру
  }

  console.log(`Question: ${number}`); // вопрос пользователю
  const userInput = readlineSync.question('Your answer: ').toLowerCase(); // ответ пользователя

  if (userInput !== isPrime(number)) { // если пользователь дал неверный ответ
    return console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${isPrime(number)}".
Let's try again, ${userName}!`);
  }
  // если ответ верный, запускается рекурсия
  console.log('Correct!');
  return gamePrime(randomNumber1To99() + 1, acc + 1);
};

gamePrime();
