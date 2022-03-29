'use strict';

// 3rd Party Resources

const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');
const { app } = require('./server');
const Users  = require('../users.schema.js');

// Process JSON input and put the data on req.body
app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL);

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

  const UserModel = Users(sequelize, DataTypes);

  module.exports = {
    sequelize,
    UserModel
  }