import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomNumber from '../utils';

const instruction = 'What number is missing in the progression?';

const progressionLength = 10;

const generateTask = () => {
  const commonDifference = getRandomNumber(1, 15);
  const hiddenElementIndex = getRandomNumber(1, progressionLength - 1);
  const start = getRandomNumber(1, 100);

  let question = '';
  let answer = null;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElementIndex) {
      question += '.. ';
      answer = start + (commonDifference * i);
    } else {
      question += `${start + (commonDifference * i)} `;
    }
  }
  return cons(question, answer.toString());
};

export default () => startGameEngine(generateTask, instruction);
