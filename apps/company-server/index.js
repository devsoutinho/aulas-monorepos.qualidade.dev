const http = require("http");

console.log("Node JS!");

http.createServer(async (req,res) => {
  res.write(JSON.stringify({ message: "Hello from Node Server!" }));
  res.end();
})
.listen(4000);