const http = require("http");
const host = "http://localhost";
const port = 3000;
const stats = require("./pcRamUsage");

http
  .createServer((req, res) => {
    let url = req.url;
    if (url === "/stats") {
      res.write(JSON.stringify(stats, null, 2));
      res.end(); // para refatorar o código eu posso usar o método end() no lugar do write(), ficando assim: res.end("<h1>Working</h1>");
    } else {
      res.write("<h1>Seja bem vinde!</h1>");
      res.end();
    }
  })
  .listen(port, () => console.log(`Server is running in ${host}:${port}`));
