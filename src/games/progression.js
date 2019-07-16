import { cons } from '@hexlet/pairs';
import {
  gameEngine, randomNumber,
} from '..';

const instruction = 'What number is missing in the progression?';

const makeProgression = (hide = randomNumber(7, 1),
  step = randomNumber(9, 1)) => {
  let start = randomNumber();
  let list = `${start}`;
  let progressionAnswer = 0; // ответ на прогрессию

  for (let count = 0; count <= 8; count += 1) { // создаем прогрессию
    start += step;
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
