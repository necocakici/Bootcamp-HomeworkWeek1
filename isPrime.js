// Kullanıcıdan input almak için gerekli olan modüllerin importu:
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number = 0;

// Asal olup olmadığını kontrol eden fonksiyon:
const isPrime = (_number) => {
  for (let i = 2; i < _number; i++) {
    if (_number % i === 0) {
      return false;
    }
  }
  return true;
};

// Console'dan sayının alınması
rl.question("Enter an integer please: ", (_number) => {
  number = _number;
  rl.close();
});

// Hesaplamanın yapılıp cevap döndürülmesi
rl.on("close", () => {
  let check = isPrime(number);
  console.log(`${number} is prime: ${check}`);
  process.exit(0);
});
