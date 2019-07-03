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

export { gameEven, userName, greetings };
