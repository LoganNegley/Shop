const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// Testing server running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Api up and running" });
});
