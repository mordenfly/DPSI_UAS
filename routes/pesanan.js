const express = require('express');
const router = express.Router();

// Tambahkan rute di sini
router.get('/', (req, res) => {
  res.send('Hello from pesanan');
});

module.exports = router;
