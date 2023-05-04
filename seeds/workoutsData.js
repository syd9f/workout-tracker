const { Workouts } = require('../models');

const workoutsdata = [
  {
    title: 'Push Ups',
    description: 'sydniefarrell@gmail.com',
    requirements: 'none',
  },
  {
    title: 'Squats',
    description: 'sydniefarrell@gmail.com',
    requirements: 'none',
  },
  {
    title: 'Run on Treadmill',
    description: 'sydniefarrell@gmail.com',
    requirements: 'treadmill',
  },
  {
    title: 'Lift Weights',
    description: 'sydniefarrell@gmail.com',
    requirements: 'weights',

  },
];

const seedWorkouts = () => Workouts.bulkCreate(workoutsdata);

module.exports = seedWorkouts;
