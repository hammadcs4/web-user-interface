<<<<<<< HEAD
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'devops',     // ✅ use your actual DB name
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres', // ✅ default password for Docker Postgres
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: console.log, // optional: shows SQL queries in console
    dialectOptions: {
      ssl: process.env.DB_SSL === "true"
    }
  }
);

// ✅ Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully'))
  .catch(err => console.error('❌ Database connection error:', err));

// ✅ Define Person model
const Person = sequelize.define('Person', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// ✅ Export for use in migrate.js and app.js
module.exports = { sequelize, Person };
=======
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'devops',     // ✅ use your actual DB name
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres', // ✅ default password for Docker Postgres
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: console.log, // optional: shows SQL queries in console
    dialectOptions: {
      ssl: process.env.DB_SSL === "true"
    }
  }
);

// ✅ Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully'))
  .catch(err => console.error('❌ Database connection error:', err));

// ✅ Define Person model
const Person = sequelize.define('Person', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// ✅ Export for use in migrate.js and app.js
module.exports = { sequelize, Person };
>>>>>>> cb4920a675d3e6cf28f09c94180c42093bc0f7f0
