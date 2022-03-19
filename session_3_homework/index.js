/** @format */

const express = require("express");
const app = express();
const course = { course: "web_57" };
const courseList = [{ course: "web_57" }, { course: "ci" }, { course: "c4e" }];

app.use(express.json());
app.get("/course", (req, res) => {
  res.json(course);
});

const randomCourse = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
app.get("/course/random", (req, res) => {
  res.json(randomCourse(courseList));
});

function addNumber(x, y) {
  const numbers = [];
  for (let i = x + 1; i <= y; i++) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
}
app.get("/even", (req, res) => {
  const x = +req.query.from;
  const y = +req.query.to;
  res.json(addNumber(x, y));
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  if (req.body.username === "admin" && req.body.password === "123456") {
    res.json({ success: true });
  }
  res.json({ success: false });
});

app.listen(9000, () => {
  console.log("App is running at 9000");
});
