module.exports = (sequelize, DataTypes) => {
    const Laporan = sequelize.define('Laporan', {
      idLaporan: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      tanggal: DataTypes.DATE,
      tipeLaporan: DataTypes.STRING,
    });
    return Laporan;
  };
  