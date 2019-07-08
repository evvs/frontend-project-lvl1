import readlineSync from 'readline-sync';

// const userName = readlineSync.question('May I have your name? ');
// const greetings = () => console.log(`Hello, ${userName}!`);

const greetings = (username = readlineSync.question('May I have your name? ')) => {
  console.log(`Hello, ${username}!`);
  return username;
};
const userName = greetings();

const gameEven = (randomNumber = Math.floor(Math.random() * 100), acc = 0) => {
  if (acc === 3) {
    console.log(`Congratulations, ${userName}`);
    return;
  }

  console.log(`Question: ${randomNumber}`);
  const userInput = readlineSync.question('Your answer: ').toLowerCase();

  if (userInput !== 'yes' && userInput !== 'no') {
    console.log(`Unexpected answer! You can use only 'yes' or 'no'\nLet's try again, ${userName}`);
  } else if (randomNumber % 2 && userInput === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
  } else if (randomNumber % 2 === 0 && userInput === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
  } else {
    console.log('Correct!');
    // eslint-disable-next-line no-param-reassign
    gameEven(randomNumber = Math.floor(Math.random() * 100), acc + 1);
  }
};

// next game calcGame
// конструктор пары
const construct = (a = Math.floor(Math.random() * 100),
  // eslint-disable-next-line consistent-return
  b = Math.floor(Math.random() * 100)) => (message) => {
  switch (message) { // ждем message из селектора и возвращаем аргумент
    case 'firstElement':
      return a;
    case 'secondElement':
      return b;
    default:
  }
};
// функция, возвращающая рандомный символ из строки
const pickRandomOperator = () => {
  const operators = '+-*';
  const funcRandom = Math.floor(Math.random() * operators.length);

  return operators[funcRandom];
};
// селекторы пары
const selectFirstElement = pair => pair('firstElement'); // первый элемент пары
const selectSecondElement = pair => pair('secondElement'); // второй элемент пары

// логика игры
const calcGameLogic = (randomNumber1 = selectFirstElement(construct()),
  randomNumber2 = selectSecondElement(construct()),
  operator = pickRandomOperator(), acc = 0) => {
  if (acc === 3) {
    console.log(`Congratulations, ${userName}`);
    return;
  }
  // eslint-disable-next-line no-eval
  const result = eval(randomNumber1 + operator + randomNumber2);
  console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
  const userInput = Number(readlineSync.question('Your answer: '));

  if (result === userInput) {
    console.log('Correct!');
    // eslint-disable-next-line no-param-reassign
    calcGameLogic(randomNumber1 = selectFirstElement(construct()),
      // eslint-disable-next-line no-param-reassign
      randomNumber2 = selectSecondElement(construct()), operator = pickRandomOperator(), acc + 1);
  } else {
    console.log(`${userInput} is wrong answer ;(. Correct answer was ${result}.
Let's try again, ${userName}!`);
  }
};

// next game gcdGame

const gcd = (a, b) => (!b ? a : gcd(b, a % b)); // функция нахождения НОД

const gcdGame = (randomNumber1 = selectFirstElement(construct()), // логика игры
  randomNumber2 = selectSecondElement(construct()), acc = 0) => {
  if (acc === 3) {
    console.log(`Congratulations, ${userName}`);
    return;
  }
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const userInput = Number(readlineSync.question('Your answer: '));

  if (gcd(randomNumber1, randomNumber2) === userInput) {
    console.log('Correct!');
    // eslint-disable-next-line no-param-reassign
    gcdGame(randomNumber1 = selectFirstElement(construct()),
    // eslint-disable-next-line no-param-reassign
      randomNumber2 = selectSecondElement(construct()), acc + 1);
  } else {
    console.log(`${userInput} is wrong answer ;(. Correct answer was ${gcd(randomNumber1, randomNumber2)}.
Let's try again, ${userName}!`);
  }
};

// Progression game

const progressionGame = (startOfProgression = Math.floor(Math.random() * 100),
  operator = pickRandomOperator(), hideNumber = Math.floor(Math.random() * 7) + 1,
  step = Math.floor(Math.random() * 10), acc = 0) => { /*
startOfProgression - первое число в прогрессии (рандом)
operator - оператор (+-* рандом)
hideNumber - скрываемое число в прогрессии (рандом)
step - шаг прогрессии
acc - accumulator
*/
  if (acc === 3) {
    console.log(`Congratulations, ${userName}`);
    return;
  }

  let answer = 0;

  const makeProgression = (currentNumber = startOfProgression, list = `${currentNumber}`, iter = 0) => {
    // функция для создание прогрессии
    if (iter === hideNumber) {
      // eslint-disable-next-line
      makeProgression(currentNumber = eval(currentNumber +operator+ step), list += ` ..`, iter + 1);
      answer = currentNumber;
    } else if (iter > 7) {
      return list;
    }
    // eslint-disable-next-line
    return makeProgression(currentNumber = eval(currentNumber +operator+ step), list += ` ${currentNumber}`, iter + 1)
  };

  console.log(`Question: ${makeProgression()}`);
  const userInput = Number(readlineSync.question('Your answer: '));

  if (userInput === answer) {
    console.log('Correct!');
    // eslint-disable-next-line no-param-reassign
    progressionGame(startOfProgression = Math.floor(Math.random() * 100),
    // eslint-disable-next-line no-param-reassign
      operator = pickRandomOperator(), hideNumber = Math.floor(Math.random() * 7) + 1,
      // eslint-disable-next-line no-param-reassign
      step = Math.floor(Math.random() * 10), acc + 1);
  } else {
    console.log(`${userInput} is wrong answer ;(. Correct answer was ${answer}.
Let's try again, ${userName}!`);
  }
};

export {
  gameEven, userName, greetings, calcGameLogic, gcdGame, progressionGame,
};
