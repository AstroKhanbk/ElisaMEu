require('dotenv').config();
const express = require('express');
const router  = express.Router();
const passport = require('../config/passport');


const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({ 
  cloud_name: 'elisamlups', 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Inventario",
  },
});

const upload = multer({ storage: storage });

const { signup, login, logout, user} = require('../controllers/auth');
const { createProduct, getProducts, getProduct, editProduct, deleteProduct } = require('../controllers/products');

//Auth
router.post('/signup', signup);
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', logout);
router.get('/user', user)

//Productos
router.post('/createProduct', upload.single('image_product'), createProduct)
router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.post('/editProduct/:id', upload.single('image_product'), editProduct)
router.delete('/deleteProduct/:id', deleteProduct);


module.exports = router;
