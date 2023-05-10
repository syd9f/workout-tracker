const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workouts',
  }
);

module.exports = Schedule;
