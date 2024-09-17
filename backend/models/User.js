let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type:String,
      required:true,
      unique:true
    }
  });
  

let User = mongoose.model('users' , userSchema)

module.exports = User