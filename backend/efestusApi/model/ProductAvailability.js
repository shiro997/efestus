const {model, Schema} = require('mongoose');

const ProductAvailabilitySchema = new Schema({
  Name: String,
});

module.exports = model("DisponibilidadProducto", ProductAvailabilitySchema);