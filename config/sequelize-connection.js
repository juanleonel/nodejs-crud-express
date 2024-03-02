const { Sequelize } = require('sequelize')
const config = require('./index')


const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: 'mysql'
  }
)

module.exports = sequelize
