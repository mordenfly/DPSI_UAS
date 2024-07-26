module.exports = (sequelize, DataTypes) => {
    const Pengguna = sequelize.define('Pengguna', {
      idPengguna: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      namaPengguna: DataTypes.STRING,
      kataSandi: DataTypes.STRING,
      peran: DataTypes.STRING,
    });
    return Pengguna;
  };
  