import readlineSync from 'readline-sync';

const askName = (usrname = readlineSync.question('May I have your name? ')) => { // узнаем имя пользователя
  console.log(`Hello, ${usrname}!`); // приветсвуем его
  return usrname; // возвращем из функции его имя
};

const stopGame = (def = 3) => def; // останавливаем рекурсию

const randomNumber1To99 = () => Math.floor(Math.random() * 100); // рандомное число от 1 до 99

const even = number => (number % 2 === 0 ? 'yes' : 'no'); // проверка числа на четность и возврат 'yes' или 'no'

// eslint-disable-next-line consistent-return
const conPair = (a = randomNumber1To99(), b = randomNumber1To99()) => (message) => {
  switch (message) { // ждем message из селектора и возвращаем аргумент
    case 'firstElement':
      return a;
    case 'secondElement':
      return b;
    default:
  }
};

// селекторы пары
const s1stElement = pair => pair('firstElement'); // первый элемент пары
const s2ndElement = pair => pair('secondElement'); // второй элемент пары

const pickRandomOperator = () => { // функция, возвращающая рандомный символ из строки
  const operators = '+-*'; // cписок операторов
  const funcRandom = Math.floor(Math.random() * operators.length);

  return operators[funcRandom];
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b)); // функция нахождения НОД

// eslint-disable-next-line
let progressionAnswer = 0; // ответ на прогрессию 

// функция создния прогрессии
const makeProgression = (start = randomNumber1To99(),
  operator = pickRandomOperator(), hide = Math.floor(Math.random() * 7) + 1,
  step = Math.floor(Math.random() * 9) + 1) => {
  let list = `${start}`;

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
  return list;
};

const isPrime = (number, divisor = 2) => { // функция для проверки простое число или составное
  if (divisor === number) {
    return 'yes'; // возвращает 'yes' если простое
  }
  if (number % divisor === 0) {
    return 'no'; // возвращает 'no' если составное
  }
  return isPrime(number, divisor + 1);
};

export {
  askName, randomNumber1To99, even, stopGame,
  conPair, s1stElement, s2ndElement, pickRandomOperator, gcd,
  makeProgression, progressionAnswer, isPrime,
};
