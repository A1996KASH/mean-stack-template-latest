const {Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../database/connection')

const users = sequelize.define('user', {
  id:{
    type: DataTypes.INTIGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Users