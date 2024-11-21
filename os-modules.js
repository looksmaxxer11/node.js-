const { log } = require("console");
const os = require("os");
const { loadEnvFile } = require("process");

// console.log(os)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
