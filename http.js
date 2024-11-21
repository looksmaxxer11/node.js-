const http = require("http");
const { start } = require("repl");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to my FUCKED UP brain bitch!");
    }
    if (req.url === "/about") {
        res.end("we are someone anonymous!")
    }
    res.end("motherfucker u missed with url");
})

server.listen(5000)