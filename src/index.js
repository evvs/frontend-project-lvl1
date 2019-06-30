import readlineSync from 'readline-sync';


export const greetings = (username=readlineSync.question('May I have your name? ')) => console.log(`Hello, ${username}!`);






