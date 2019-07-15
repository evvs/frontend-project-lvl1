import { cons } from '@hexlet/pairs';
import {
  gameEngine, randomNumber, randomOperator,
} from '..';

const instruction = 'What number is missing in the progression?';

const makeProgression = (start = randomNumber(),
  operator = randomOperator(), hide = randomNumber(7, 1),
  step = randomNumber(9, 1)) => {
  let list = `${start}`;
  let progressionAnswer = 0; // ответ на прогрессию

  for (let count = 0; count <= 8; count += 1) { // создаем прогрессию
    // eslint-disable-next-line
    start = eval(start + operator + step);
    if (count === hide) { // если счетчик равен скрытому числу
      progressionAnswer = start;
      list += ' ..';
    } else { // если счетчик не равен скрытому числу
      list += ` ${start}`;
    }
  }
  return cons(list, `${progressionAnswer}`);
};

export default () => gameEngine(makeProgression, instruction);
