const express = require("express");
const app = express();
const db = require("./db");
const port = process.env.port;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome to hotel");
});

const personRouter=require("./routers/person");
app.use("/person",personRouter);

const menuRouter=require("./routers/menu");
app.use("/menu",menuRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
