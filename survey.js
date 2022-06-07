const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name, or nickname? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('What is your favourite thing to eat during that meal? ', (answer5) => {
          console.log(`Hi! My name is ${answer1}, and I like to ${answer2} while listening to ${answer3}. My favourite meal is ${answer4} and I love eating ${answer5}.`);

          rl.close();
        })
      })
    })
  })
});