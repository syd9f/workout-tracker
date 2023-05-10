const { Schedule } = require('../models');

const scheduledata = [
  {
    title: 'Seated Twist',
    complete: false,
  },
  {
    title: 'Wild Thing Pose',
    complete: false,
  },
  {
    title: 'Barbell Curl',
    complete: false,
  },
];

const seedSchedule = () => Schedule.bulkCreate(scheduledata);

module.exports = seedSchedule;
