const Product = require('./../models/Product')

exports.createProduct = async (req, res)=> {
  const {
    name,
    description,
    price,
    category,
    stock,
  } = req.body
  const {path} = req.file;
  console.log('path---', path)
  Product.create({
    name,
    description,
    price,
    category,
    stock,
    image:path
  })
  .then(product => {
    res.status(200).json({ product })
  })
  .catch(error => {
    res.status(400).json({ error })
  })
}

exports.getProducts = async (req, res) => {
  Product.find()
  .then((products) => res.status(200).json({ products }))
  .catch((error) => res.status(400).json({ error }));
}