const { Schedule } = require('../models');

const scheduledata = [
  {
    title: 'Push Ups',
  },
  {
    title: 'Running',
  },
];

const seedSchedule = () => Schedule.bulkCreate(scheduledata);

module.exports = seedSchedule;
