import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const instruction = 'What number is missing in the progression?';

const progressionLength = 10;

const generateTask = () => {
  const diff = getRandomNumber(1, 15);
  const answerIndex = getRandomNumber(1, progressionLength - 1);
  const init = getRandomNumber(1, 100);

  const answer = init + (diff * answerIndex);
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === answerIndex) {
      question = `${question}.. `;
    } else {
      question = `${question}${init + (diff * i)} `;
    }
  }
  return cons(question.trim(), answer.toString());
};

export default () => playGame(generateTask, instruction);
