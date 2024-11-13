const {model, Schema} = require('mongoose');

const CategorySchema = new Schema({
  Name: String,
});

module.exports = model("Categoria", CategorySchema);