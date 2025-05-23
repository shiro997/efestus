const {model, Schema} = require('mongoose');

const UserTypeSchema = new Schema({
  Name: String,
});

module.exports = model("TipoUsuario", UserTypeSchema);