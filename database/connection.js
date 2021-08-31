const { Sequelize } = require('sequelize')
const config = require('../config/config.json')
const sequelize = new Sequelize(config.test.database, config.test.username, config.test.password, { host: config.test.host, dialect: config.test.dialect })

module.exports = sequelize
