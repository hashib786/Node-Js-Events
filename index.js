// As a best practice, listeners should always be added for the 'error' events.
/*
import { EventEmitter } from "node:events";
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("error", (err) => {
  console.log(err instanceof Error);
  console.log("-->", err.name);
  console.log("-->", err.message);
  console.log("-->", err.stack);
  console.error("whoops! there was an error");
});
myEmitter.emit("error", new Error("whoops!"));
// Prints: whoops! there was an error
 */

/*
import { EventEmitter } from "node:events";

EventEmitter.captureRejections = true;
const ee1 = new EventEmitter();
ee1.on("something", async (value) => {
  throw new Error("kaboom");
});

ee1.on("error", console.log);
*/

import { EventEmitter } from "node:events";
import http from "node:http";
const myEmitter = new EventEmitter();

// First listener
myEmitter.on("event", function firstListener() {
  console.log("Helloooo! first listener");
});
// Second listener
myEmitter.on("event", function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on("event", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});
// Fourth listener
myEmitter.on("hashib", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners("event").toLocaleString());

const server = http.createServer((req, res) => {});

server.on("hashib", (...args) => {
  console.log(args);
});

// server.on("dropRequest"

myEmitter.emit("event", 1, 2, 3, 4, 5);
console.log(myEmitter.eventNames());
server.emit("hashib", 1, 2, 3, 4, 5);
console.log(server.eventNames());
console.log(server.listeners("hashib")[0]("hello", "world"));
