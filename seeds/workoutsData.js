const { Workouts } = require('../models');

const workoutsdata = [
  {
    title: 'Push Ups',
  },
];

const seedWorkouts = () => Workouts.bulkCreate(workoutsdata);

module.exports = seedWorkouts;
