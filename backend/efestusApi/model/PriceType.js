const {model, Schema} = require('mongoose');

const PriceTypeSchema = new Schema({
  Name: String,
});

module.exports = model("TipoPrecio", PriceTypeSchema);