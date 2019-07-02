import readlineSync from 'readline-sync';

const greetings = (username = readlineSync.question('May I have your name? ')) => console.log(`Hello, ${username}!`);

const gameEven = (randomNumber = Math.floor(Math.random() * 100), acc=0) => {

  console.log(`Question: ${randomNumber}`);
  const userInput = readlineSync.question('Your answer: ');

  //console.log(`Question: ${randomNumber}`);

  if (randomNumber % 2 === 0 && userInput === 'no') {
       console.log('stupid')
  }
  else {
    console.log('excellent')
  }
} 

gameEven()
export { greetings, gameEven };
