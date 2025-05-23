const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
  Name: String,
  UserType: String,
  Address: String,
  Celphone: String,
  Email: String,
  Password: String,
});

module.exports = model("Usuario", UserSchema);