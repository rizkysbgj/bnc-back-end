const express = require('express');
const router = express.Router();
const { registerHandler, sendOtpHandler } = require('./handler')

router.post(
  '/register', 
  registerHandler
);

router.post(
  '/send-otp', 
  sendOtpHandler
);

module.exports = router;