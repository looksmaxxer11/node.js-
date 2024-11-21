const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync('./test/first.txt', 'utf-8')
const second = readFileSync("./test/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync("./test/test.txt", `hey, it is ${first}, hey it is ${second}`)

// done!

