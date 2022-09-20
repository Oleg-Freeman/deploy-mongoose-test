const express = require("express");
const mongoose = require("mongoose");

const app = express();
const mongoURL =
  "mongodb+srv://user1:qwerty123456.@cluster0.ltv3e58.mongodb.net/admin?authSource=admin&replicaSet=atlas-kety85-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

app.listen(5000, () => {
  console.log("Server started");

  mongoose
    .connect(mongoURL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
});
