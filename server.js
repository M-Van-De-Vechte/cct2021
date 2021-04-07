// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();



// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about-me.html", (request, response) => {
  response.sendFile(__dirname + "/views/about-me.html");
});

app.get("/caesar.html", (request, response) => {
  response.sendFile(__dirname + "/views/caesar.html");
});

app.get("/cash.html", (request, response) => {
  response.sendFile(__dirname + "/views/cash.html");
});

app.get("/contact.html", (request, response) => {
  response.sendFile(__dirname + "/views/contact.html");
});

app.get("/hello.html", (request, response) => {
  response.sendFile(__dirname + "/views/hello.html");
});

app.get("/lesson-0-scratch.html", (request, response) => {
  response.sendFile(__dirname + "/views/lesson-0-scratch.html");
});

app.get("/lesson-1-c.html", (request, response) => {
  response.sendFile(__dirname + "/views/lesson-1-c.html");
});

app.get("/lesson-2-arrays.html", (request, response) => {
  response.sendFile(__dirname + "/views/lesson-2-arrays.html");
});

app.get("/lesson-3-algorithms.html", (request, response) => {
  response.sendFile(__dirname + "/views/lesson-3-algorithms.html");
});

app.get("/lesson-4-memory.html", (request, response) => {
  response.sendFile(__dirname + "/views/lesson-4-memory.html");
});

app.get("/terms-and-conditions.html", (request, response) => {
  response.sendFile(__dirname + "/views/terms-and-conditions.html");
});

app.get("/web.html", (request, response) => {
  response.sendFile(__dirname + "/views/web.html");
});

app.get("/mario.html", (request, response) => {
  response.sendFile(__dirname + "/views/mario.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

