const mongoose = require("mongoose");
require("dotenv").config();
const mongourl = process.env.mongourlLocal;

mongoose.connect(mongourl);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb conected sucessfuly");
});
db.on("error", () => {
  console.log("error");
});
db.on("disconnected", () => {
  console.log("mongodb disconnected sucessfuly");
});

module.exports = db;
