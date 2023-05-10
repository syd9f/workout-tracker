const User = require('./User');
const Schedule = require('./Schedule');


module.exports = { User };

User.hasMany(Schedule, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Schedule.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Schedule };

