const { User } = require('../models');
const bcrypt = require('bcrypt');

const userdata = [
  {
    name: 'Sydnie',
    email: 'sydniefarrell@gmail.com',
    password: '$2a$10$7E2hwn.Rr7s779iBbUn.0uvJPImlcHxc62VyVpB1r0m3Lg/74IBpe',
  },
  {
    name: 'Vincent Van Gogh',
    email: 'vangogh@aol.com',
    password: '$2a$10$6QwurfEk9IRP.VKyFQ91NuckHm60fl9Nobj9LDgV9AWa/SP.ZdRxG',
  },
  {
    name: 'Steve Jobs',
    email: 'stevejobs@icloud.com',
    password: '$2a$10$H2RCFRv4my8SR2Z1wVpMqeFMowoi0XnuSmWXDhk0M.5X.7.AFqKOC',
  },
  {
    name: 'Amanda Bynes',
    email: 'amandabynes@gmail.com',
    password: '$2a$10$tnisJqzNxSjoWXUMGT0UaeTw49BuqVwEOzJxdaaq1KFiXiJV7KwPe',
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
