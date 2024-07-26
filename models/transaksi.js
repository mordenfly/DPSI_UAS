module.exports = (sequelize, DataTypes) => {
    const Transaksi = sequelize.define('Transaksi', {
      idTransaksi: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      tanggal: DataTypes.DATE,
      jumlahTotal: DataTypes.DOUBLE,
    });
    return Transaksi;
  };
  