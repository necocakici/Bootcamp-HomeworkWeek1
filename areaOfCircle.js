const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let radius = 0;
let area = 0;

rl.question("Please enter a valid radius: ", (_radius) => {
  radius = _radius;
  area = Math.PI * radius ** 2;
  rl.close();
});

rl.on("close", () => {
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(3)}'dır`);
  process.exit(0);
});
