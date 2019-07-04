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
const construct = (a = Math.floor(Math.random() * 100), b = Math.floor(Math.random() * 100)) => (message) => {

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

const calcGameLogic = (randomNumber1 = selectFirstElement(construct()), 
  randomNumber2 = selectSecondElement(construct()), 
  operator = pickRandomOperator(), acc = 0) => {

  if (acc === 3) {
    console.log(`Congratulations, ${userName}`);
    return;
  }
  const result = eval(randomNumber1 + operator + randomNumber2);
  console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
  const userInput = Number(readlineSync.question('Your answer: '));

  if (result === userInput) {
    console.log('Correct!');
    calcGameLogic(randomNumber1 = selectFirstElement(construct()), 
      randomNumber2 = selectSecondElement(construct()), operator = pickRandomOperator(), acc + 1);
  } else {
    console.log(`${userInput} is wrong answer ;(. Correct answer was ${result}.
Let's try again, ${userName}!`);
  }
};

calcGameLogic()

export { gameEven, userName, greetings, calcGameLogic };
