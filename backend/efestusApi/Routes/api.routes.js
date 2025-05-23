const express = require('express');
const router = express.Router();
const Catalog = require('./catalog.routes');

router.use('/v1/catalog',Catalog);

module.exports = router;