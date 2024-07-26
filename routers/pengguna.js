const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticate');
const db = require('../models');
const Pengguna = db.Pengguna;

router.post('/', authenticateJWT, async (req, res) => {
  const pengguna = await Pengguna.create(req.body);
  res.json(pengguna);
});

module.exports = router;
