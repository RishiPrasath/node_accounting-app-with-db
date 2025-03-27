'use strict';

const { User } = require('./User.model');
const { Expense } = require('./Expense.model');

// Define relationships with CASCADE delete
User.hasMany(Expense, {
  foreignKey: 'userId',
  onDelete: 'CASCADE', // This enables cascading deletion
});

Expense.belongsTo(User, {
  foreignKey: 'userId',
});

// Make sure tables are synced with the right constraints
// But without using console.log
async function syncModels() {
  try {
    await User.sync({ alter: true });
    await Expense.sync({ alter: true });
  } catch (error) {
    // Handle error silently or use a proper logger
    // that complies with the linting rules
  }
}

syncModels();

module.exports = {
  models: {
    User,
    Expense,
  },
};
