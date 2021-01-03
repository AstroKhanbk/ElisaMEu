const express = require('express');
const router  = express.Router();
const passport = require('../config/passport');

const { signup, login, logout} = require('../controllers/auth');
const { createProduct, getProducts } = require('../controllers/products');

//Auth
router.post('/signup', signup);
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', logout);

//Productos
router.post('/createProduct', createProduct)
router.get('/products', getProducts)

module.exports = router;
