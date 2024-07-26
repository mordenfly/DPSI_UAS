const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticate');
const db = require('../models');
const Laporan = db.Laporan;

router.post('/', authenticateJWT, async (req, res) => {
  const laporan = await Laporan.create(req.body);
  res.json(laporan);
});

module.exports = router;
