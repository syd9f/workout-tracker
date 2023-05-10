const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedSchedule = require('./scheduleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedSchedule();

  process.exit(0);
};

seedAll();
