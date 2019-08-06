import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (generateTask, instruction) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${instruction}`);

  const username = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${username}!`);

  const runGame = (correctAnswersCount = 0) => {
    if (correctAnswersCount === roundsCount) {
      console.log(`Congratulations, ${username}`);
      return;
    }
    const сurrentTask = generateTask();
    const question = car(сurrentTask);
    const correctAnswer = cdr(сurrentTask);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
    runGame(correctAnswersCount + 1);
  };
  return runGame();
};
