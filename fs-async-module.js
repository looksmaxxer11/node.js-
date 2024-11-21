const { error } = require('console');
const { writeFile, readFile, } = require('fs');

readFile(
  "./test/first.txt",
  "utf8",
  (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(result);
    const first = result;
    readFile("./test/second.txt", "utf-8", (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(result);
        const second = result;
        writeFile(
          "./test/test.txt",
          `here is the final result: ${first}, ${second}`,
          (error, result) => {
            if (error) {
              console.log(error);
              return;
            }
            console.log(result);
          }
        );
      }
    });
  },
);
