const express = require('express');
const app = express();

const authRoutes = require('./routes/auth');
const transaksiRoutes = require('./routes/transaksi');
const itemmenuRoutes = require('./routes/itemmenu');
const penggunaRoutes = require('./routes/pengguna');
const pesananRoutes = require('./routes/pesanan');
const laporanRoutes = require('./routes/laporan');

app.use('/auth', authRoutes);
app.use('/transaksi', transaksiRoutes);
app.use('/itemmenu', itemmenuRoutes);
app.use('/pengguna', penggunaRoutes);
app.use('/pesanan', pesananRoutes);
app.use('/laporan', laporanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
