const express = require("express");
const router = express.Router();
const Menu = require("./../models/menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const response = await newMenu.save();
    console.log("data saved sucessfully");
    res.status(200).json(response);
  } catch (err) {
    console.log("error saving menu", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Menu.find();
    console.log("data fetched sucessfully");
    res.status(200).json(response);
  } catch (err) {
    console.log("error fetching menu", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:tastetype", async (req, res) => {
  try {
    const tastetype = req.params.tastetype;
    const response = await Menu.find({ taste: tastetype });
    console.log("data fetched sucessfully");
    res.status(200).json(response);
  } catch (err) {
    console.log("error fetching person", err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
