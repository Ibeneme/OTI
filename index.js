const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Worlde!");
});

app.get("/sample", (req, res) => {
  res.send("This is a sample endpoint");
});

app.post("/data", (req, res) => {
  res.send("POST request received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
