const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5001;
const mongoURL =
  "mongodb+srv://user1:qwerty123456.@cluster0.ltv3e58.mongodb.net/admin?authSource=admin&replicaSet=atlas-kety85-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

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
