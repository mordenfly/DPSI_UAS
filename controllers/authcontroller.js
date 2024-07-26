const jwt = require('jsonwebtoken');
const db = require('../models');
const Pengguna = db.Pengguna;

exports.login = async (req, res) => {
  const { namaPengguna, kataSandi } = req.body;
  const pengguna = await Pengguna.findOne({ where: { namaPengguna, kataSandi } });
  if (!pengguna) {
    return res.status(401).send('Pengguna atau kata sandi salah');
  }
  const token = jwt.sign({ idPengguna: pengguna.idPengguna, peran: pengguna.peran }, 'secretkey');
  res.json({ token });
};
