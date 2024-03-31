const mongoose = require("mongoose");
const mongourl = "mongodb://127.0.0.1:27017/hotel";

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
