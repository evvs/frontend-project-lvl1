import readlineSync from 'readline-sync';

const greetings = (username = readlineSync.question('May I have your name? ')) => console.log(`Hello, ${username}!`);

export { greetings };
