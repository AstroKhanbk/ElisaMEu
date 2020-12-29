const {Schema, model} = require('mongoose');

const productSchema = new Schema ({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
  },
  price:{
    type:Number,
    required:true
  },
  category: {
    ref:'Category',
    type: Schema.Types.ObjectId
  },
  stock:{
    type:Number,
    required:true
  },
  image: {
    type: String,
    default:'https://www.gdldigital.com/wp-content/uploads/woocommerce-placeholder.png'
  }
},{
  timestamps:true
})

module.exports = model('Product', productSchema);