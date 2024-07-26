const express = require('express');
const router = express.Router();
const authRouter = require('./routers/auth');

router.post('/login', authController.login);

module.exports = router;
