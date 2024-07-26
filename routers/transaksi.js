const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticate');
const db = require('../models');
const Transaksi = db.Transaksi;

router.post('/', authenticateJWT, async (req, res) => {
  const transaksi = await Transaksi.create(req.body);
  res.json(transaksi);
});

module.exports = router;
