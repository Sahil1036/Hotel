const express = require("express");
const router = express.Router();
const mongoose=require("mongoose");
const Person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved sucessfully");
    res.status(200).json(response);
  } catch (err) {
    console.log("error saving person", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    console.log("data fetched sucessfully");
    res.status(200).json(response);
  } catch (err) {
    console.log("error fetching person", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const worktype=req.params.worktype;
    if(worktype==='chef'||worktype==='owner'||worktype==='waiter'){
      const response = await Person.find({work:worktype});
      console.log("data fetched sucessfully");
      res.status(200).json(response);
    }else{
      res.status(404).json("Person not found");
    }
  } catch (err) {
    console.log("error fetching person", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const id=req.params._id;
    const updateData=req.body;
    const response=await Person.findByIdAndUpdate(id,updateData,{
      new:true,
      runValidators:true
    });
    if(!response)
    res.status(404).json({ error: "Not update data" });
  }catch (err) {
    console.log("error fetching person", err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const id=req.params._id;
    const response=await Person.findByIdAndRemove(id);
    if(!response)
    res.status(404).json({ error: "Not found" });
  }catch (err) {
    console.log("error fetching person", err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
