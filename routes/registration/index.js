const express = require('express');
const router = express.Router();
const { registerHandler } = require('./handler')

router.post(
  '/register', 
  registerHandler
);

module.exports = router;