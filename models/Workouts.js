const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workouts extends Model {}

Workouts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workouts',
  }
);

module.exports = Workouts;
