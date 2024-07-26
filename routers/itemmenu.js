const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticate');
const db = require('../models');
const ItemMenu = db.ItemMenu;

router.post('/', authenticateJWT, async (req, res) => {
  const itemMenu = await ItemMenu.create(req.body);
  res.json(itemMenu);
});

module.exports = router;
