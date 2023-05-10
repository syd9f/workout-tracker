const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedWorkouts = require('./scheduleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedWorkouts();

  process.exit(0);
};

seedAll();
