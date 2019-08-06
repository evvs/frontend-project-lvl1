import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const instruction = 'What number is missing in the progression?';

const progressionLength = 10;

const generateTask = () => {
  const commonDifference = getRandomNumber(1, 15);
  const hiddenElementIndex = getRandomNumber(1, progressionLength - 1);
  const start = getRandomNumber(1, 100);

  const answer = start + (commonDifference * hiddenElementIndex);
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElementIndex) {
      question = `${question}.. `;
    } else {
      question = `${question}${start + (commonDifference * i)} `;
    }
  }
  return cons(question, answer.toString());
};

export default () => playGame(generateTask, instruction);
