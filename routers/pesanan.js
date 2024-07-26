const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticate');
const db = require('../models');
const Pesanan = db.Pesanan;

router.post('/', authenticateJWT, async (req, res) => {
  const pesanan = await Pesanan.create(req.body);
  res.json(pesanan);
});

module.exports = router;
