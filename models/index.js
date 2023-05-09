const User = require('./User');
const Workouts = require('./Workouts');


module.exports = { User };

User.hasMany(Workouts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Workouts.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Workouts };

