'use strict';

const bcrypt = require('bcrypt');

// Create a Sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  hooks: {
    beforeCreate: (user, options) => {
      bcrypt.hash(user.password, 10)
    }
  }
});

module.exports = {
  Users
}