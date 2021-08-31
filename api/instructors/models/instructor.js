const { DataTypes } = require('sequelize')
const sequelize = require('../../../database/connection')

const Instructor = sequelize.define('course', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  profilePicture: {
    type: DataTypes.STRING(512),
    allowNull: false,
    field: 'profile_picture'
  },
  signatureLink: {
    type: DataTypes.STRING(512),
    allowNull: false,
    field: 'signature_link'
  },
  createdAt: {
    type: DataTypes.BIGINT,
    allowNull: false,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.BIGINT,
    allowNull: false,
    field: 'updated_at'
  }
}, {
  freezeTableName: true,
  timestamps: false
})

module.exports = Instructor
