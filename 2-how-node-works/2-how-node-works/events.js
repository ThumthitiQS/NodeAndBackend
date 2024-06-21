const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name : wan");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

//////////////////

const server = http.createServer();

//// if u see "on" it mean that listen to event
server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another Request 😊");
});

server.on("close", () => {
  console.log("Server Closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests.....");
});

// request twice because  root / and /favicon.ico
