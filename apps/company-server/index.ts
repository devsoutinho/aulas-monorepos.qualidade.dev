import http from "http";
import { httpClient } from "@devsoutinho/commons-http-client";

console.log("Node JS!");

http.createServer(async (_,res) => {
  const githubPayload = await httpClient.get("https://api.github.com/users/omariosouto")

  res.write(JSON.stringify({
    message: "Hello from Node Server!!!",
    githubPayload
   }));

  res.end();
})
.listen(4000);