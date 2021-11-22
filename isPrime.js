const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number = 0;

const isPrime = (_number) => {
  for (let i = 2; i < _number; i++) {
    if (_number % i === 0) {
      return false;
    }
  }
  return true;
};

rl.question("Sayi giriniz? ", (_number) => {
  number = _number;
  //console.log(`${number} is prime: ${isPrime(number)}`);
  rl.close();
  //process.exit(0);
});

rl.on("close", () => {
  console.log(`${number} is prime: ${isPrime(number)}`);
  process.exit(0);
});
