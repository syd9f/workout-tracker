const { Users } = require('../models');

const userdata = [
  {
    name: 'Sydnie',
    email: 'sydniefarrell@gmail.com',
    password: 'Password',
  },
  {
    name: 'Vincent Van Gogh',
    email: 'vangogh@aol.com',
    password: 'StarryNight400',
  },
  {
    name: 'Steve Jobs',
    email: 'stevejobs@icloud.com',
    password: 'AppleCE0',
  },
  {
    name: 'Amanda Bynes',
    email: 'amandabynes@gmail.com',
    password: 'AmandaShow00',
  },
];

const seedUsers = () => Users.bulkCreate(userdata);

module.exports = seedUsers;
