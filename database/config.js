require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    timezeone: 'Africa/Lagos',
    logging: false
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    timezeone: 'Africa/Lagos',
    logging: false
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    timezeone: 'Africa/Lagos',
    logging: false
  },
}