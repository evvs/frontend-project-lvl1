#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  makeProgression, progressionAnswer, stopGame, askName,
} from '..';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?');
const userName = askName(); // узнаем имя и сохраняем в константу

// реализация игры
const progression = (acc = 0) => {
  if (acc === stopGame()) { // когда acc будет равен stopGame(по дефолту значение 3, можно поменять)
    return console.log(`Congratulations, ${userName}`); // выйти из рекурсии и закончить игру
  }
  console.log(`Question: ${makeProgression()}`); // вопрос пользователю
  const userInput = Number(readlineSync.question('Your answer: '));

  if (userInput !== progressionAnswer) { // если пользователь дал неверный ответ
    return console.log(`${userInput} is wrong answer ;(. Correct answer was ${progressionAnswer}.
Let's try again, ${userName}!`);
  }
  // если ответ верный, запускается рекурсия
  console.log('Correct!');
  return progression(acc + 1);
};

progression();
