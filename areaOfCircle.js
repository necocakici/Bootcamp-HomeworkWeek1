// Kullanıcıdan input almak için gerekli olan modüllerin importu:
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let radius = 0;
let area = 0;

// Console'dan çap değerinin alınması
rl.question("Please enter a valid radius: ", (_radius) => {
  radius = _radius;
  area = Math.PI * radius ** 2;
  rl.close();
});

// Hesaplamanın yapılıp cevap döndürülmesi
rl.on("close", () => {
  console.log(
    `The area of a circle with a radius of ${radius} is ${area.toFixed(3)}.`
  );
  process.exit(0);
});
