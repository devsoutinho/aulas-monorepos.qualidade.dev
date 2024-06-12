"use client";
import { httpClient } from "@devsoutinho/commons-http-client";

export default function Page() {
  httpClient
    .get("https://api.github.com/users/omariosouto")
    .then((data) => console.log(data))
  
  return <h1>Hello, world!</h1>
}