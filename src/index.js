import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const randomNumber = (max = 100, optional = null) => (optional === null
  ? Math.floor(Math.random() * max)
  : Math.floor(Math.random() * max) + optional); // рандомное число по дефолту от 1 до 99

export const gameEngine = (gameLogic, instruction) => { // движок игры
  console.log(`Welcome to the Brain Games!\n${instruction}`);

  const username = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${username}!`);

  const iter = (acc = 0) => {
    if (acc === 3) { // остановить рекурсию, когда юзер дал 3 верных ответа
      return console.log(`Congratulations, ${username}`);
    }
    const pair = gameLogic();
    const question = car(pair);
    const answer = cdr(pair);

    console.log(`Question: ${question}`); // вопрос пользователю
    const userInput = readlineSync.question('Your answer: ').toLowerCase(); // ответ пользователя

    if (userInput !== answer) { // если ответ пользователя неверный
      return console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${answer}"
Let's try again, ${username}!`);
    }
    console.log('Correct!'); // если ответ пользователя верный
    return iter(acc + 1);
  };
  return iter();
};
