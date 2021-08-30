const Sequelize = require('sequelize')
const db = require('../../database/connection')

const users = db.define('user', {
  id: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
})
