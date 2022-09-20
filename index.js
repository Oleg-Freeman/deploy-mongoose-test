const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5001;
const mongoURL = process.env.MONGO_URL;

app.get("/", (req, res, next) => {
  res.send("<h1>Main Page</h1>");
});

app.listen(port, () => {
  console.log("Server started");

  mongoose
    .connect(mongoURL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
});
