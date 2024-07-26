module.exports = (sequelize, DataTypes) => {
    const ItemMenu = sequelize.define('ItemMenu', {
      idItem: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      namaItem: DataTypes.STRING,
      hargaItem: DataTypes.DOUBLE,
      deskripsiItem: DataTypes.STRING,
    });
    return ItemMenu;
  };
  