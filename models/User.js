const {Schema, model} = require('mongoose');
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
  name:String,
  email:{
    type:String,
    unique:true
  },
  image:{
    type:String,
    default:'https://png.pngtree.com/svg/20160330/dpi_user_default_avatar_116913.png'
  }
},{
  timestamps:true
})

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);