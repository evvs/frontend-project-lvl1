import readlineSync from 'readline-sync';
// будем использовать пары для сохранения информации(вопрос, ответ)
export const cons = (a, b) => (message) => {
  switch (message) {
    case 'firstElement':
      return a;
    case 'secondElement':
      return b;
    default:
  }
  return '';
};


// селекторы пары
const car = pair => pair('firstElement'); // забрать первый элемент пары(вопрос)
const cdr = pair => pair('secondElement'); // забрать второй элемент пары(ответ)

export const randomNumber = (max = 100, optional = null) => (optional === null
  ? Math.floor(Math.random() * max)
  : Math.floor(Math.random() * max) + optional); // рандомное число по дефолту от 1 до 99

export const randomOperator = () => { // функция, возвращающая рандомный символ из строки
  const operators = '+-*'; // cписок операторов
  const funcRandom = Math.floor(Math.random() * operators.length);

  return operators[funcRandom];
};

const askName = (usrname = readlineSync.question('May I have your name? ')) => { // узнаем имя пользователя
  console.log(`Hello, ${usrname}!`); // приветсвуем его
  return usrname; // возвращем из функции его имя
};

export const gameEngine = (gameLogic, instruction) => { // движок игры
  if (gameLogic && instruction) { // если в движок передали логику игры
    console.log(`Welcome to the Brain Games!
${instruction}`);

    const username = askName();
    // в требованиях игру нужно повторить 3 раза, если юзер дал верный ответ. делаем рекурсию
    const iter = (engineLogic = gameLogic(), acc = 0) => {
      if (acc === 3) { // остановить рекурсию, когда юзер дал 3 верных ответа
        return console.log(`Congratulations, ${username}`);
      }
      console.log(`Question: ${car(engineLogic)}`); // вопрос пользователю
      const userInput = readlineSync.question('Your answer: ').toLowerCase(); // ответ пользователя

      if (userInput !== cdr(engineLogic)) { // если ответ пользователя неверный
        return console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${cdr(engineLogic)}"
Let's try again, ${username}!`);
      }
      // если ответ верен, запускается рекурсия
      console.log('Correct!');
      return iter(gameLogic(), acc + 1);
    };
    return iter();
  }
  console.log('Welcome to the Brain Games!'); // если в движок не передали логику игры
  return askName();
};
