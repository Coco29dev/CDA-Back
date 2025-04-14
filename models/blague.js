const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Blague = sequelize.define('Blague', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  content: {
    type: DataTypes.TEXT,
    required: true,
    allowNull: false,
  },
});

module.exports = Blague;