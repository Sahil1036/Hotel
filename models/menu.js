const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: "string",
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: "string",
    enum: ["chicken wings", "spices", "sauce"],
  },
  num_sales: {
    type: Number,
  },
});

const Menu = mongoose.model("menu", menuSchema);
module.exports = Menu;
