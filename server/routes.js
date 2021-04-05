const express = require('express');
const index = require('./views/index');


const router = express.Router();


router.get('*', index);


module.exports = router;
