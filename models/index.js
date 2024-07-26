const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Transaksi = require('./transaksi')(sequelize, DataTypes);
db.ItemMenu = require('./itemmenu')(sequelize, DataTypes);
db.Pengguna = require('./pengguna')(sequelize, DataTypes);
db.Pesanan = require('./pesanan')(sequelize, DataTypes);
db.Laporan = require('./laporan')(sequelize, DataTypes);

db.Transaksi.hasMany(db.ItemMenu);
db.Pesanan.hasMany(db.ItemMenu);
db.Pengguna.hasMany(db.Pesanan);

module.exports = db;
