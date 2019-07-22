import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import randomNumber from '../utils';

const instruction = 'What number is missing in the progression?';


const createTask = () => {
  const progressionLength = 10;
  const commonDifference = randomNumber();
  const hiddenElement = randomNumber(1, progressionLength - 1);

  let firstElement = randomNumber();
  let sequence = `${firstElement}`;
  let progressionAnswer = 0;

  for (let i = 1; i < progressionLength; i += 1) {
    firstElement += commonDifference;
    if (i === hiddenElement) {
      progressionAnswer = firstElement;
      sequence = `${sequence} ..`;
    } else {
      sequence = `${sequence} ${firstElement}`;
    }
  }
  return cons(sequence, progressionAnswer.toString());
};

export default () => gameEngine(createTask, instruction);
