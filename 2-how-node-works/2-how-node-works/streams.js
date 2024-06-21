const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //solution 2: streams (instead of reading the whole file into memory)
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end(); // end ethod no more data will be written in writable stream
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500; // server error is 500
  //     res.end("File not Found");
  //   });
  // sol2 can cuase backpressure -> can not send the file nearly as fast as it recieving it form the file

  // solution 3 , handle that
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDestination); // will be sent to client
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening..");
});
