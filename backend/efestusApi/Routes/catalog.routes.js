const express = require('express');
const router = express.Router();
const category = require('../Catalog/categoryController');
const priceType = require('../Catalog/PriceTypeController');
const prodav = require('../Catalog/productAvailabilityController');
const usrType = require('../Catalog/usertypeController');

router.post('/category', category.createCategories);
router.get('/category', category.getCategories);
router.get('/price-type', priceType.getPriceType);
router.get('/product-availability', prodav.getProductAvailabilities);
router.get('/user-type', usrType.getUserTypes);

module.exports = router;