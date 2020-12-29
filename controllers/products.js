const Product = require('./../models/Product')

exports.createProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    stock,
    image
  } = req.body
  
  Product.create({
    name,
    description,
    price,
    category,
    stock,
    image
  })
  .then(product => {
    res.status(200).json({ product })
  })
  .catch(error => {
    res.status(400).json({ error })
  })
}