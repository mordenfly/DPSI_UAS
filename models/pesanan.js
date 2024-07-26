module.exports = (sequelize, DataTypes) => {
    const Pesanan = sequelize.define('Pesanan', {
      idPesanan: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      tanggal: DataTypes.DATE,
      status: DataTypes.STRING,
    });
    return Pesanan;
  };
  